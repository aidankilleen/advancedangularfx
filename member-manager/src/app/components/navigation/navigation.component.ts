import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <nav>
      <a routerLink="home">Home</a> | 
      <a routerLink="about">About</a> | 
      <a routerLink="contact">Contact Us</a> | 
      <a routerLink="memberlist">Members</a> | 
    </nav>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

}
