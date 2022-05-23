import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, pipe } from 'rxjs';

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

  todos:any = []

  todoTitle: string = ''

  loading: boolean = false

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.fetchTodos()
  }

  addPost() {
    if (!this.todoTitle.trim()) {
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      complited: false
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe((post) => {
        this.todos.unshift(post)
        this.todoTitle = ''
      })
  }
  fetchTodos() {
    this.loading = true
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe((todos) => {
        this.todos = todos
        this.loading = false
      })
  }
  removeTodo(id: number){
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter((t:any) => t.id !== id)
      })
  }
}






