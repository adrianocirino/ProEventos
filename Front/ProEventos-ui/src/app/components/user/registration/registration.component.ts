import { ValidatorField } from './../../../helpers/ValidatorField';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

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
      primeiroNome: [null, [ Validators.required]],
      ultimoNome: [null, [ Validators.required]],
      email: [null, [ Validators.required, Validators.email]],
      userName: [null, [ Validators.required]],
      senha: [null, [ Validators.required , Validators.minLength(6)]],
      confirmeSenha: [null, [ Validators.required]],
    }, formOptions);
  }

}
