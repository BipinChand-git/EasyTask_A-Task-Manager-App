import { Component } from '@angular/core';

// import { NgFor, NgIf } from '@angular/common';    // to unlock the structural directive-
// also have to includes these in imports array in case we are using these

import { HeaderComponent } from './header/header.component';

import { UserComponent } from './user/user.component';

import { TasksComponent } from './tasks/tasks.component';


import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId ?: string; //initial value have not set-

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id:string) {
    this.selectedUserId = id;   //update the id
  }
}
