import { NewTaskData } from "./task/task.model";

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
// By adding this Injectable decorator like this angular now is aware of this service and can create such an instance when we needed.
// And most importantly it will only create and re-use one instance.

export class TasksService {
    // Creating a dummy tasks here so we can add these tasks from this tasks array-
    private tasks = [
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

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        // unshift will add task at the beginning.
        this.tasks.unshift({
            id: new Date().getTime().toString(),   //to get unique Id
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            userId: userId,   //as it holds the currently selected userId.
        });
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        // It will filter out or return the task that not matches the id of task that we completed.
        // Basically to complete task or delete the specific task which we click as complete.
    }
}