import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any;

  constructor(private service: EventosService) { }

  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.service.getEventos().subscribe(
      response => this.eventos = response
    );
  }

}
