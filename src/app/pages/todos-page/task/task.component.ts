import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  //Propiedades del componente
  titulo: string = '';
  descripcion:string ='';
  responsable:string='';
  fecha: Date = new Date();
  fechaFin :Date = new Date();// Fecha nueva por defecto para la tarea nueva
  urgencia: number = 4; // Grado de importancia por defecto para la tarea nueva
  // Lista de Tareas del componente
  tareas: Task[] = []; // Lista(Array) de Todos inicializada vacía

  constructor(){}
  ngOnInit(): void {
  }
 /**
    Sirve para crear una nueva tarea y añadirla
   ** Método crearTarea
   * a la lista de tareas del componente
   */
   crearTarea(): void {
    // Creamos la tarea
    let nuevaTarea = new Task(this.titulo, this.descripcion, this.urgencia,this.responsable, this.fecha,this.fechaFin, false);
    // La añadimos al final de la lista de tareas a través de push()
    this.tareas.push(nuevaTarea);
  }

  

}
