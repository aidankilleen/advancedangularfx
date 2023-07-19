import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'accordion',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {
  
  @ContentChildren(AccordionPanelComponent)
  panels!: QueryList<AccordionPanelComponent>;
  
  ngAfterContentInit(): void {
    this.panels.forEach(panel => {
      panel.selectedChange.subscribe(()=> {
        
        // select all panels except the one that was just clicked
        // close them
        this.panels.filter(child => child != panel)
            .forEach(child => child.selected = false);

      })
    })
  }
}
