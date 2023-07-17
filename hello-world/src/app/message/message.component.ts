import { Component, EventEmitter, Input, Output } from '@angular/core';
import Message from '../message.model';


@Component({
  selector: 'message',
  template: `
    <div *ngIf="!editing">
      <h2>{{ message.title }}</h2>
      <p>{{ message.text }}</p>
    </div>
    <div *ngIf="editing">
      <input [(ngModel)] = "editingMessage.title"/><br>
      <input [(ngModel)] = "editingMessage.text"><br/>
    </div>
    <button *ngIf="!editing" (click) = "onEdit()">Edit</button>
    <button *ngIf="editing" (click) = "onSave()">Save</button>
    <button *ngIf="editing" (click) = "onCancel()">Cancel</button>

    <button (click)="onReset()">Reset</button>
    <hr>
    {{ editingMessage | json }} <br>
    {{ message | json }}
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input({ required: true}) message!: Message;
  @Output() messageChange = new EventEmitter()

  editing = false;

  editingMessage: Message = new Message("","");

  onEdit() {
    this.editing = true;
    this.editingMessage = new Message(this.message.title, this.message.text);
  }

  onSave() {
    //this.message.title = this.editingMessage.title;
    //this.message.text = this.editingMessage.text;
    //this.message = this.editingMessage;

    this.messageChange.emit(this.editingMessage);

    this.editing = false;
  }

  onCancel() {
    this.editing = false;
  }

  onChangeTitle(value: string) {
    this.message.title = value;
  }
  onReset() {
    this.message.title = "";
    this.message.text = "";
  }
}
