import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {

  form = this.formBuilder.group({
    tema: [null, [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    qtdPessoa: [null, [ Validators.required ]],
    email: [null, [ Validators.required, Validators.email ]],
    local: [null, Validators.required],
    dataEvento: [null, Validators.required],
    imagemURL: [null, Validators.required],
    telefone: [null, Validators.required],
  });

  get f(): any {
    return this.form.controls;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.form.reset();
  }

}
