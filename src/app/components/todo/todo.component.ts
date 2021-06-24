import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  tarea!: Task; 
   // Atributos
 // Atributos
  public taskListNoCompleted: any[] = [];
 public taskListCompleted: any[] = [];

  constructor() {
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
   }

  ngOnInit(): void {
  }

  /**
   * Método completar
   * Sirve para cambiar el estado de la tarea del componente
   * Llamamos al método de la clase "completar()"
   */
  completar(): void {
    this.tarea.completar();
    if(this.tarea.completed!=false){
      this.taskListCompleted.push(this.tarea);
      console.log(" "+this.taskListCompleted.length);
    }
      
    else{
      this.taskListNoCompleted.push(this.tarea);
    }
      
  
  }

  /**
   * Método getColor
   * Sireva para darle color al componente
   * @return string
   * El color de la tarea según su gradoImportancia
   */
  getColor(): string {
    switch (this.tarea.urgencia) {
      case 1:
        return '#EF4816';
      case 2:
        return '#EA631F';
      case 3:
        return '#EEAE38';
      default:
        return '#57B9B0';
    }
  }

}
