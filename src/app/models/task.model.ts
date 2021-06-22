import { Itask } from "./itask.interaface";

export class Task implements Itask{
  date: Date;
  description: string;
  completed: boolean;

  constructor(date: Date, description: string, completed: boolean) {
    this.date = date;
    this.description = description;
    this.completed = completed;

  }
}
