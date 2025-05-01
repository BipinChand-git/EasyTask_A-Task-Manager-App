import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

import { initializeApp } from "firebase/app";
// import { HeaderComponent } from './app/header.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
// Now we can call this once and other components nested in this AppComponent.

// bootstrapApplication(HeaderComponent).catch((err) => console.log(err));
// However this is not a way we should follow to render our component instead we use Component-Tree

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH-tVgXc6lX2cRnoIcBTkWynoRD4LOtXA",
  authDomain: "easytask-angular-project.firebaseapp.com",
  projectId: "easytask-angular-project",
  storageBucket: "easytask-angular-project.firebasestorage.app",
  messagingSenderId: "664803939524",
  appId: "1:664803939524:web:492c168ba7dc7c857e6591"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);