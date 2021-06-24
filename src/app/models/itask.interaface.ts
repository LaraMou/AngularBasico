export interface Itask {
    id :number;
    titulo:string;
    descripcion: string;
    urgencia: number;
    responsable: string;
    fechaInicio: Date;
    fechaFin: Date;
    completed:boolean;
  }
