import { Component } from '@angular/core';
import { Todo } from './todo-list.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todo[] = [].sort((a, b) => a.id - b.id);
  newTodo: '';
  todo: Todo;
  changeTodo: Todo;

  addTodo() {
    this.todo = new Todo(this.todos.length + 1, this.newTodo, false);
    if (this.newTodo.length < 3) {
      alert('Titolo troppo piccolo');
    } else {
      this.todos.push(this.todo);
      console.log(this.todos);
      this.newTodo = '';
    }
  }

  changeStatus(compl: Todo) {
    [this.changeTodo] = this.todos.filter((item) => item.title === compl.title);
    this.changeTodo.turnToComplete();
    this.todos = this.todos.filter(
      (item) => item.title !== this.changeTodo.title
    );

    return this.todos.push(this.changeTodo);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => item.title != todo.title);
  }
}
