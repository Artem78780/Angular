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

  constructor(private http: HttpClient) {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos) => {
        console.log('Response is ', todos)
        this.todos = todos
      })
  }
  ngOnInit(): void {

  }


}
