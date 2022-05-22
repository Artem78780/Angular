import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  complited: boolean
  title: string
  id?: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []

  todoTitle: string = ''

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .subscribe((todos) => {
      console.log('Response is ', todos)
      this.todos = todos
    })
  }

  addPost(){
    if(!this.todoTitle.trim()){
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      complited: false
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe((post ) => {
        this.todos.unshift(post)
        this.todoTitle = ''
      })
  }





}
