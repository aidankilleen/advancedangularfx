import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'accordion-panel',
  template: `
    <div (click)="onClick()">
      <h2 [ngClass]="{'selected': selected}">{{ title }}</h2>
      <ng-content *ngIf="selected"></ng-content>
    </div>
  `,
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent {

  @Input() title = "";
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter();

  onClick() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
