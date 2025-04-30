# EasyTask - Enterprise-Level Task Management App

A scalable Angular-based task management application designed for efficient enterprise workflow handling. EasyTask is a great starting point for learning Angular while building something practical.

## Features

- Dynamic User Selection – Choose a user to view personalized tasks.
- Task Filtering – Users' assigned tasks are displayed dynamically.
- Standalone Angular Components – Modular architecture for scalability.
- Modern Control Flow – Utilizes @for and @if for cleaner template logic.
- Dependency Injection for Services – Ensures efficient task state management across components.
- Task Management Service – Centralized service for handling task operations, eliminating redundant component logic.
- LocalStorage Persistence – Automatically retains tasks across sessions.
- Signals API Integration – Enhances responsiveness and state management.
- Content Projection (ng-content) – Allows flexible, reusable component structures.
- Two-Way Binding for Forms – Streamlines input handling and task creation.
- Angular Pipes for Date Formatting – Formats due dates for improved readability.
- Task Completion & Removal – Removes tasks efficiently using an injectable service.

## Usage

- Select a user to view their assigned tasks.
- Add new tasks using a dynamic modal dialog with two-way binding.
- Complete and remove tasks seamlessly using the service.
- Future enhancements will include authentication and database integration for persistence.

## Technologies Used

- Angular 17+
- TypeScript
- Standalone Components
- Signals API
- Control Flow Syntax (@for, @if)
- Dependency Injection for Services
- LocalStorage for Persistent Data
- Content Projection (ng-content)
- Angular Pipes for Formatting

## Future Improvements

- Implement authentication & role-based access.
- Database integration for persistent data.

## Development server

To start a local development server, run:

```bash
ng serve or npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Essentials

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
