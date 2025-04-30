import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { NewTaskComponent } from './new-task/new-task.component';

import  { NewTaskData } from './task/task.model';

import { TasksService } from './tasks.service';

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

  // Now using service to manages our tasks

  // private tasksService = new TasksService();
  // we actually have to instantiate a service.
  // But this approach have a problem if we use this service in different component.
  // There we have to also create instance of service. and at last if we make changes in any component it will not reflected on other component.
  // And we would be operating on different instances of this tasksService.

  // So we will use Dependency Injection instead, another powerful tool offered by angular.
  constructor(private tasksService : TasksService){}
  // and we have to use injectable in service to register this instance.

  // using getter to compute the task or filter out the task that belongs to the specific user-
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {}  //no longer needed after using services

  isAddTasks = false;
  // This method is to open the dialog when we click on AddTask.
  onStartAddTasks() {
    this.isAddTasks = true;
  }

  // This method to cancel our dialog which opens to add task.
  onCancelAddingTask() {
    this.isAddTasks = false;
  }

  // onAddingTask(newTask : NewTaskData){
  //   this.isAddTasks = false;  //to close the modal
  // }
  // As we have removed the addTask custom event as using service so this method also no longer needed.
}
