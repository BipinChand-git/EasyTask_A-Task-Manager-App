import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// import { HeaderComponent } from './app/header.component';


bootstrapApplication(AppComponent).catch((err) => console.error(err));
// Now we can call this once and other components nested in this AppComponent.

// bootstrapApplication(HeaderComponent).catch((err) => console.log(err));
// However this is not a way we should follow to render our component instead we use Component-Tree

