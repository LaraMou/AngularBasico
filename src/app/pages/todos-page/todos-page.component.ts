import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
 // El Input que se va a pasar desde el Padre (ListComponent)
  // Si tuviéramos Angular Strict Mode nos obligaría adarle un valor por defecto
  // El Input que se va a pasar desde el Padre (ListComponent)
  // Si tuviéramos Angular Strict Mode nos obligaría adarle un valor por defecto
  @Input()
  tarea!: Task; 

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Método completar
   * Sirve para cambiar el estado de la tarea del componente
   * Llamamos al método de la clase "completar()"
   */
  completar(): void {
    this.tarea.completar();
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
