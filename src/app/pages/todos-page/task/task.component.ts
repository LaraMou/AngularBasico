import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
 // Tarea pasada
  date = new Date();
  @Input() task: Task = new Task("","",0,"",new Date(),new Date(),false);
 // Indice de la tarea
  @Input() index: number = 0;

 // Evento de salida al eliminar una tarea
 @Output() remove: EventEmitter<number>;
 // Evento de salida al completar una tarea
 @Output() complete: EventEmitter<number>;

 // Inicializamos los outputs
  constructor() {

   this.remove = new EventEmitter<number>();
   this.complete = new EventEmitter<number>();
 }

 ngOnInit() {
 }

 /**
  * Emite un evento al componente padre para que lo elimine, le pasamos el indice de la tarea
  */
 taskCheckedEvent() {
   this.complete.emit(this.index);
 }

 /**
  * Emite un evento al componente padre para que lo complete, le pasamos el indice de la tarea
  */
 removeEvent() {
   this.remove.emit(this.index);
 }


}
