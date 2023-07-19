import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <select [(ngModel)]="capitalise">
      <option type="radio" value="upper">Upper</option>
      <option type="radio" value="lower">Lower</option>
      <option type="radio" value="title">Title</option>
    </select>

    <input [capitalise] = "capitalise"/>

    <hr>
    <div class="highlight">
      This is a div 
    </div>

    <h1 class="highlight">Highlighted?</h1>

    {{ price | currency:'EUR'  }} <br>

    {{ today | date:'longDate' | uppercase }} <br>

    {{ eircode | uppercase }}

    <hr>

    <input 
      type="range" 
      [max]="text.length"
      [(ngModel)]="length"/>

    <p>{{ text | summary: length }}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  capitalise="upper";

  title = 'extensibility investigation';

  length = 50;

  price = 1.2345;

  today = new Date();

  eircode = "t45ab23";

  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, expedita maiores id debitis iure pariatur suscipit aperiam? Provident deleniti blanditiis necessitatibus nobis cupiditate, odit animi nesciunt dignissimos, consequuntur, iste repellat.";



}
