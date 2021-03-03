import { Evento } from './../models/evento.model';
import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: Evento[] = [];
  eventosFiltrados: Evento[] = [];

  filtroListado = '';
  widthImg = 80;
  marginImg = 2;
  showImg = true;

  public get filtroLista(): string {
    return this.filtroListado;
  }

  public set filtroLista(value: string) {
    this.filtroListado = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  constructor(private service: EventosService) { }

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.service.getEventos().subscribe(
      (response: Evento[]) => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );
  }

  ocultarImg(): void {
    this.showImg = !this.showImg;
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento  => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                       evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

}
