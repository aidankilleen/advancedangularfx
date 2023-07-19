import { AfterContentInit, Component, ContentChildren } from '@angular/core';
import { WrapperPanelComponent } from '../wrapper-panel/wrapper-panel.component';

@Component({
  selector: 'wrapper',
  template: `
    <div>
      <h1>Wrapper</h1>

      <ng-content></ng-content>
    </div>
    <hr>
    
  `,
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements AfterContentInit {
  
  @ContentChildren(WrapperPanelComponent)
  panels!: WrapperPanelComponent[];
  
  ngAfterContentInit(): void {
    
    this.panels.forEach(panel => {
      panel.selectedChange.subscribe(() => {

        console.log("selected changed");
      })
    })
  }

}
