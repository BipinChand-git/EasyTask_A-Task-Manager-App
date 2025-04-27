import { Component, EventEmitter, Input, Output, output} from '@angular/core';

import { CardComponent } from '../shared/card/card.component';

import { type User } from './user.model';   //adding type to make it clear that we're importing type definitions but it's not required technically.

@Component({
  selector : 'app-user',
  standalone : true,
  imports : [CardComponent],
  templateUrl : './user.component.html',
  styleUrl : './user.component.css'
})

export class UserComponent {
  // Input decorator so we can access these variable to its parent component like in app.component.html
  // @Input({ required: true }) avatar !: string;
  // @Input({ required: true }) name !: string;
  // @Input({ required:true }) id !: string;

  // rather having three inputs with string type we can have one input with object type-
  @Input({ required: true }) user !: User;

  @Input({ required: true }) selected !: boolean;    //To set the user if it's selected or not.

  @Output() select = new EventEmitter<string>();  //this is our custom event and we can access this on our parent component.
  // this generic type doesn't required here but we can add for extra type safety.

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // And this is pretty new so we will stick to the input decorator.
  // Now with input function which is an alternative way of doing same--input with lowercase i.
  
  // avatar = input.required<string>();
  // name = input.required<string>();

  // select = output<string>();  //using output() function it automatically creates an EventEmitter under the hood and other things will be same.
  // But this not produce any signal it just gives an custom event we can emit.

  // with signals again we can use this computed function which meant to be re-computed when this avatar value changes.
  // imagePath = computed(() => 'assets/users/' + this.avatar());

}


// This is just to know the basic concept of angular now above we can continue in our project.
/*
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone : true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];   //we can say variable without let and const and it is public.
  selectedUser = signal(DUMMY_USERS[randomIndex]);   //here using signals

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);  //computed is meant to used with signals.

  // Used getter feature from javascript and typescript.
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {        //method that is executed when we click on our button
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);   //setting the signal with new value
  }
}

// So the property we define here in the class body we can access these on our templates that's a core feature of Angular.

*/