import { Component, Output, EventEmitter } from '@angular/core';

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
  
  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000);
  })

}
