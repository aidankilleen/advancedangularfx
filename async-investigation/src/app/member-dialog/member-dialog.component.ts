import { Component, EventEmitter, Input, Output } from '@angular/core';
import Member from '../member.model';

@Component({
  selector: 'member-dialog',
  template: `
    <div 
      class="modal" 
      [ngStyle]="{display: show ? 'block' : 'none'}"
      >

      <!-- Modal content -->
      <div class="modal-content" >
        <span class="close" (click)="onCancel()">&times;</span>
        <p>Some text in the Modal..</p>

        <input [(ngModel)]="member.name" placeholder="Enter Name"><br>
        <input [(ngModel)]="member.email" placeholder="someone@mail.com"><br>
        <input type="checkbox" [(ngModel)]="member.active"><br>
        <button (click)="onSave()">Ok</button>        
        <button (click)="onCancel()">Cancel</button> 
      </div>

    </div>
  `,
  styleUrls: ['./member-dialog.component.css']
})
export class MemberDialogComponent {

  @Input() show: boolean = false;
  @Input({required:true}) member!: Member;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  onCancel() {
    this.cancel.emit();
  }
  onSave() {
    this.save.emit(this.member);
  }
}
