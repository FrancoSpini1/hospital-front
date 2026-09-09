import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http: HttpClient) {}

  getMisTurnos(idPaciente: number): Observable<Turno[]> {
    return this.http.get<Turno[]>(`http://localhost:8080/paciente/verMisTurnos/${idPaciente}`)
  }
}