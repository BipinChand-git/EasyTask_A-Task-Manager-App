import { Component, Output, EventEmitter, signal } from '@angular/core';

import { type NewTaskData } from '../task/task.model';

import { FormsModule } from '@angular/forms';
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
  @Output() cancel = new EventEmitter<void>();

  @Output() addTask = new EventEmitter<NewTaskData>();

  // We will store the input values in them and using two-way binding it updates with each key press down.  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // If we use signals with this ngModel and Two-way-Binding syntax.
  // enteredTitle = signal('');   //passing empty string as initial value to enteredTitle.
  // enteredSummary = signal('');
  // enteredDate = signal('');
  // And using signals with ngModel and two-way-binding rather than our property we don't need to do anything.


  // To emit our own cancel custom event.
  onCancel() {
    this.cancel.emit();
  }

  // When we submit our form or ngSubmit occurs when we click on Submit button.
  onSubmit() {
    console.log(this.enteredTitle);
    this.addTask.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    });
  }
}
