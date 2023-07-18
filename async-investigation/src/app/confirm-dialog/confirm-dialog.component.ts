import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  template: `
    <div 
      class="modal" 
      [ngStyle]="{display: show ? 'block' : 'none'}"
      >

      <!-- Modal content -->
      <div class="modal-content" >
        <span class="close" (click)="onCancel()">&times;</span>
        
        <p>{{ message }}</p>
        <p>Are you sure?</p>

        <button (click)="onOk()">Ok</button>        
        <button (click)="onCancel()">Cancel</button> 
      </div>

    </div>
  `,
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  @Input() show = false;
  @Input() message: string = "";

  @Output() ok = new EventEmitter();
  @Output() cancel = new EventEmitter();

  onOk() {
    this.ok.emit();
  }
  onCancel() {
    this.cancel.emit();
  }
}
