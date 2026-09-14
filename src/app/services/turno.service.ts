import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../models/turno';
import { medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http: HttpClient) {}

  getMisTurnos(idPaciente: number): Observable<Turno[]> {
    return this.http.get<Turno[]>(`http://localhost:8080/paciente/verMisTurnos/${idPaciente}`)
  }

  getMedicos(): Observable<medico[]> {
    return this.http.get<medico[]>(`http://localhost:8080/admin/obtenerMedicos`)
  }
}