import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <button (click)="onClick()">Change the title</button>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';

  onClick() {
    this.title = "The Title Was Changed";
  }
}
