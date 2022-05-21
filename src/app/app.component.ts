import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post  {
  title: string,
  text: string,
  id?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 date: Observable<Date> = new Observable(obj => {
   setInterval(() => {
     obj.next(new Date)
   }, 1000)
 })

}
