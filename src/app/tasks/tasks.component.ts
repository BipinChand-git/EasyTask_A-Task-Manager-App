import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { NewTaskComponent } from './new-task/new-task.component';

import  { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports : [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId !: string;
  @Input({ required: true }) name !: string;

  // Creating a dummy tasks here so we can add these tasks from this tasks array-
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-06-01',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2025-06-30',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2025-06-15',
    },
  ];

  // using getter to compute the task or filter out the task that belongs to the specific user-
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    // It will filter out or return the task that not matches the id of task that we completed.
    // Basically to complete task or delete the specific task which we click as complete.
  }

  isAddTasks = false;
  // This method is to open the dialog when we click on AddTask.
  onStartAddTasks() {
    this.isAddTasks = true;
  }

  // This method to cancel our dialog which opens to add task.
  onCancelAddingTask() {
    this.isAddTasks = false;
  }

  onAddingTask(newTask : NewTaskData){
    // unshift will add task at the beginning.
    this.tasks.unshift({
      id : new Date().getTime().toString(),   //to get unique Id
      title : newTask.title,
      summary : newTask.summary,
      dueDate : newTask.date,
      userId : this.userId,   //as it holds the currently selected userId.
    });
    this.isAddTasks = false;  //to close the modal
  }
}
