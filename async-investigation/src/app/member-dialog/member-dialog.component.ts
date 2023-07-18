import { Component, Input } from '@angular/core';

@Component({
  selector: 'member-dialog',
  template: `
    <div id="myModal" class="modal" [ngStyle]="{display: show ? 'block' : 'none'}">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>

    </div>
  `,
  styleUrls: ['./member-dialog.component.css']
})
export class MemberDialogComponent {

  @Input() show: boolean = false;

}
