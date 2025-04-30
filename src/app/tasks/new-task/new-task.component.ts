import { Component, Input, Output, EventEmitter, signal, inject } from '@angular/core';

import { type NewTaskData } from '../task/task.model';

import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';

// To unlock the ngModel directive.
// And this FormsModule we can think of as a collection of directives and features.
// Which helps us dealing with forms input, and with user inputs.

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId !: string;

  // Renaming it close to make it more clear
  @Output() close = new EventEmitter<void>();

  // @Output() addTask = new EventEmitter<NewTaskData>();
  // this no longer needed as using the service to adding a task

  // We will store the input values in them and using two-way binding it updates with each key press down.  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Using service -TasksService to add Task-
  private tasksService = inject(TasksService);
  // alternative of constructor to inject a service

  // If we use signals with this ngModel and Two-way-Binding syntax.
  // enteredTitle = signal('');   //passing empty string as initial value to enteredTitle.
  // enteredSummary = signal('');
  // enteredDate = signal('');
  // And using signals with ngModel and two-way-binding rather than our property we don't need to do anything.


  // To emit our own cancel custom event.
  onCancel() {
    this.close.emit();
  }

  // When we submit our form or ngSubmit occurs when we click on Submit button.
  onSubmit() {
    this.tasksService.addTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate,
    },
    this.userId);   //second argument to the service

    this.close.emit();  //to close the modal
  }
}
