import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

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
  title = 'extensibility investigation';

  length = 50;

  price = 1.2345;

  today = new Date();

  eircode = "t45ab23";

  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, expedita maiores id debitis iure pariatur suscipit aperiam? Provident deleniti blanditiis necessitatibus nobis cupiditate, odit animi nesciunt dignissimos, consequuntur, iste repellat.";



}
