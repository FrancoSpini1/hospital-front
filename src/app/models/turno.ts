export interface Turno {
  id: number;
  fechaTurno: string;
  horaTurno: string;
  paciente: {
    id: number;
    nombreCompleto: string;
  };
  medico: {
    id: number;
    nombreCompleto: string;
    matricula: number;
    especialidad: string;
  };
}