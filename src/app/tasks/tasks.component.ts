import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports : [TaskComponent],
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
}
