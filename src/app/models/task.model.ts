import { Itask } from "./itask.interaface";

export class Task implements Itask{
  id :number=0;
  titulo:string;
  descripcion: string;
  urgencia: number;
  responsable: string;
  fechaInicio: Date;
  fechaFin: Date;
  completed:boolean;

  constructor(titulo: string, descripcion: string, urgencia: number, responsable: string,fechaInicio :Date,
    fechaFin :Date,
    completed:boolean) {

      this.titulo = titulo;
      this.descripcion = descripcion;
      this.urgencia = urgencia;
      this.responsable = responsable;
      this.fechaInicio = fechaInicio;
      this.fechaFin = fechaFin;
      this.completed = completed;
    }
  }
