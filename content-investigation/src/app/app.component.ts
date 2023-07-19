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


    <hr>

    <accordion>
      <accordion-panel title="News Item 1">
        <h3>Fire</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi autem magnam eos iure repellendus velit ducimus dignissimos, neque eveniet deleniti a magni recusandae excepturi tempora rerum harum natus ratione nesciunt!</p>
      </accordion-panel>
      <accordion-panel title="News Item 2">
        <h3>Robbery</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aperiam molestias animi doloribus eum rerum. Reiciendis optio tempora unde amet error eius laboriosam impedit! Pariatur expedita adipisci atque ipsa repellendus.</p>
      </accordion-panel>
      <accordion-panel title="News Item 3">
        <h3>Weather</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, placeat omnis asperiores non rerum deserunt rem ullam, alias cupiditate unde ipsum perferendis. Tempore distinctio, veniam vitae odio quidem ut non.</p>
        <p>Ab incidunt eaque quam ad? Tenetur adipisci doloremque consequuntur libero illo corporis fuga saepe expedita cupiditate, omnis exercitationem asperiores, totam officiis numquam, voluptatem recusandae. Eos cum quibusdam quos corporis dolore.</p>
        <p>Porro adipisci accusamus consequuntur eligendi molestias dignissimos placeat eum magni, doloribus culpa, libero rem repellendus nisi illum nostrum! Sed iure, obcaecati quos porro consectetur iusto dolore repellendus sequi sint? Culpa.</p>
      </accordion-panel>
    </accordion>




  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'content investigation';
}
