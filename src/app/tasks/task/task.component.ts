import { Component, Input, Output, input, EventEmitter, inject} from '@angular/core';

import { CardComponent } from '../../shared/card/card.component';

import  { DatePipe } from '@angular/common';

import { type Task } from './task.model';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task !: Task;
  // Rather than accepting input for each pieces of data we can simply above accept the task object type once.
  // @Input() title !: string;
  // time = input.required<string>();

  // Now using service-TasksService to complete task-
  private tasksService = inject(TasksService);

  // no longer needed after using services
  // @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);  //using service
  }
}
