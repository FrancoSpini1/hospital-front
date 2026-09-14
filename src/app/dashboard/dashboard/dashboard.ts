import { Component, inject, OnInit } from '@angular/core';
//angularmaterial components
import { MatLineModule } from '@angular/material/core';
  import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TurnoService } from '../../services/turno.service';
import { Turno } from '../../models/turno';
import { Router} from '@angular/router'; 
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
private router = inject(Router);
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
  hacerTurnoNuevo(){
    this.router.navigate(['/turnonuevo']);    
      
  }
}
