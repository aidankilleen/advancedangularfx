import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <accordion>
      <accordion-panel title="Panel 1">
        <h3>Wrapper</h3>
        <p>This is wrapped content</p>
      </accordion-panel>

      <accordion-panel title="Panel 2" [selected]="true">
        <h3>Picture</h3>
        <img src="https://picsum.photos/id/400/300/200">
      </accordion-panel>

      <accordion-panel title="Panel 3">
        <h2>List</h2>
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </ul>
      </accordion-panel>
    </accordion>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'content investigation';
}
