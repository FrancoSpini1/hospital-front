import { Component, OnInit } from '@angular/core';
//angularmaterial components
import { MatLineModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TurnoService } from '../../services/turno.service';
import { Turno } from '../../models/turno';
//////////////


@Component({
  selector: 'app-dashboard',
  imports: [MatLineModule,MatButtonModule,MatToolbarModule,MatIconModule,MatTableModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{

  displayedColumns: string[] = [
  'fecha',
  'hora',
  'paciente',
  'medico',
  'especialidad'
];

dataSource: Turno[] = [];

  constructor(private turnoService: TurnoService) {}

  ngOnInit(): void {
        const idPaciente = 1;

    this.turnoService.getMisTurnos(idPaciente)
      .subscribe({
        next: (turnos) => {
          this.dataSource = turnos;
        },
        error: (error) => {
          console.error('Error al obtener los turnos:', error);
        }
      });    
  }

}
