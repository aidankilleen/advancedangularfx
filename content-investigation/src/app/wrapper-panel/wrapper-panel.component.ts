import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wrapper-panel',
  template: `
    <div 
      [ngClass]="{ 'selected':selected }"
      (click)="onClick()"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./wrapper-panel.component.css']
})
export class WrapperPanelComponent {

  @Input() selected = false;
  @Output() selectedChange = new EventEmitter();

  onClick() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
