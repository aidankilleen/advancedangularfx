import { Component, OnInit } from '@angular/core';
import Message from './message.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>
    
    <button (click)="onClick()">Change the title</button>

    <message [(message)]="message"></message>

    <!--
    <message 
      [message]="message"
      (messageChange)="onMessageChange($event)">
    </message>
    -->
    <hr>
    
    {{ message | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello world';

  // message: Message = new Message("M1", "This is m1");
  message!: Message; // = undefined; //ew Message("M1", "This is m1");

  /*
  onMessageChange(updatedMessage: Message) {
    this.message = updatedMessage;
  }
  */

  onClick() {
    this.title = "The Title Was Changed";
  }

  constructor() {
    
  }

  ngOnInit(): void {
    this.message = new Message("MM", "mmm");
  }

}
