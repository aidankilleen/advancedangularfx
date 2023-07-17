import { Component, Input } from '@angular/core';
import Message from '../message.model';


@Component({
  selector: 'message',
  template: `
    <div *ngIf="!editing">
      <h2>{{ message.title }}</h2>
      <p>{{ message.text }}</p>
    </div>
    <div *ngIf="editing">
      
    <!--
      <input 
        [value]="message.title" 
        (keyup)="onChangeTitle(txtTitle.value)" 
        #txtTitle/><br/>
    -->

      <input [(ngModel)] = "message.title"/><br>
      <input [(ngModel)] = "message.text"><br/>
    </div>
    <button (click) = "editing = !editing">Edit</button>

    <button (click)="onReset()">Reset</button>
    <hr>
    {{ message | json }}
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input({ required: true}) message!: Message;
  editing = false;
  onChangeTitle(value: string) {
    this.message.title = value;
  }
  onReset() {
    this.message.title = "";
    this.message.text = "";
  }
}
