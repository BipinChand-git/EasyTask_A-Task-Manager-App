import { Component, Input, input } from '@angular/core';

import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task !: Task;
  // Rather than accepting input for each pieces of data we can simply above accept the task object type once.
  // @Input() title !: string;

  // time = input.required<string>();

}
