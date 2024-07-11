import { Component, Input } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    color:string=''
    numberOftask = 10;
    todos = [
      { title: 'Task 1', progress: false },
      { title: 'Task 2', progress: true },
      { title: 'Task 3', progress: false },
      { title: 'Task 4', progress: true },
      { title: 'Task 5', progress: true },
      { title: 'Task 6', progress: false },
      { title: 'Task 7', progress: true },
      { title: 'Task 8', progress: true },
      { title: 'Task 9', progress: true },
      { title: 'Task 10', progress: false },
    ];
}
