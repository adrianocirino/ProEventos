import { Evento } from '../models/evento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private readonly apiUrl = 'https://localhost:2001/api/';

  constructor(private http: HttpClient) { }

  public getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(`${this.apiUrl}Eventos`).pipe(
      map(obj => obj),
      retry(3)
    );
  }

}
