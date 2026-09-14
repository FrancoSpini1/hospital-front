import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { medico } from '../../models/medico';
import { TurnoService } from '../../services/turno.service';
/**interface Especialidad {
  value: string;
  viewValue: string;
}


interface Medico {
  value: string;
  viewValue: string;
} */

@Component({
  selector: 'app-turno-nuevo',
  imports: [MatButtonModule, MatIcon,MatFormFieldModule, MatSelectModule, MatInputModule,
     FormsModule,MatDatepickerModule,MatNativeDateModule],
  standalone:true,
  templateUrl: './turno-nuevo.html',
  styleUrl: './turno-nuevo.css'
})
export class TurnoNuevo implements OnInit{
  
  medicos: medico[] =[];

  especialidades2: string[] =[]
  constructor (private turnoService: TurnoService){ }
/**  especialidades: Especialidad[] = [
    {value: 'oftalmologia-0', viewValue: 'Oftalmologia'},
    {value: 'pediatria-1', viewValue: 'Pediatria'},
    {value: 'neurologia-2', viewValue: 'Neurologia'},

  ];
   */

      /**es un arreglo de especialidades y medicos hardcodeada con fines esteticos, la idea es que hayaa un condicional 
     * en lo que respecta a la especialidad que elija el paciente al momento de sacar el turno. que el sistema muestre 
     * en un mat-select solo los medicos en la BDD que posean esa especialidad seleccionada.
     * lo mismo con el medico cuando lo selecciones, te muestre un mat-calendar para poner FECHA Y HORA (
     * mucho cuidado aca que no se desconchen los datos ingrefsados con las fechas del back). y despues de 
     * que te ingreses los datos y des a aceptar turno te pregunte de nuevo como para confirmar
     */

/**  staff: Medico[] =[
    {value:'medico-0',viewValue:'Jose Perez'},
    {value:'medico-1',viewValue:'Agustina Minari'},
    {value:'medico-2',viewValue:'Pedro Simeoni'},
  ] */

  ngOnInit(): void {
    //obtenemos los medicos del back. y lo guardamos en un array de medicos
    this.turnoService.getMedicos().subscribe({
      next: (medicos)=> {
        this.medicos=medicos;
        // sacamos las especialidades sin repetir 
        this.especialidades2 = [
          ...new Set(
            medicos.map(medico => medico.especialidad)
          )
        ] /**todo lo que esta entre corchetes me lo tiro chatgpt */;
      },
    })
  }
}
