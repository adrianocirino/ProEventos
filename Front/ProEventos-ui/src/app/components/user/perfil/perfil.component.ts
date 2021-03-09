import { ValidatorField } from './../../../helpers/ValidatorField';
import { FormGroup, FormBuilder, Validators, AbstractControlOptions } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;

  get f(): any { return this.form.controls; }

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
    };

    this.form = this.formBuilder.group({
      titulo: [null, [ Validators.required]],
      primeiroNome: [null, [ Validators.required]],
      ultimoNome: [null, [ Validators.required]],
      email: [null, [ Validators.required, Validators.email]],
      telefone: [null],
      funcao: [null, Validators.required],
      descricao: [null],
      senha: [null, [ Validators.required , Validators.minLength(6)]],
      confirmeSenha: [null, [ Validators.required]],
    }, formOptions);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
  }

  resetForm(event: any): void {
    event.preventDefault();
    this.form.reset();
  }

}
