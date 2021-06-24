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
     /**
   * Método MostrarTODO
   * Sirve para mostrar por consola los datos de un Todo
   * @returns string
   * Cadena de texto con los datos del Todo
   */
  mostrarTodo(): string {
    return `Todo: ${this.titulo}\n¿Completada?: ${this.completed}`
  }

  /**
   * Método Completar
   * Sirve para cambiar el estado de una tarea de completada a no completada
   * y viceversa
   */
  completar(): void {
    this.completed = !this.completed;
  }

  }
