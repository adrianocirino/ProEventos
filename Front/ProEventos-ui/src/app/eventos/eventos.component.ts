import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];

  widthImg = 80;
  marginImg = 2;
  showImg = true;
  private filtroListaa = '';
  public eventosFiltrados: any = [];

  public get filtroLista(): string {
    return this.filtroListaa;
  }

  public set filtroLista(value: string) {
    this.filtroListaa = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  constructor(private service: EventosService) { }

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.service.getEventos().subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    );
  }

  ocultarImg(): void {
    this.showImg = !this.showImg;
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                       evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

}
