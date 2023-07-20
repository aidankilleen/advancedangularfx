import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `

    <div class="card">
        <p-menubar [model]="items"></p-menubar>
    </div>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  items = [
    { label: "Home", icon: "pi pi-home", routerLink: "home" }, 
    { label: "About", icon: "pi pi-question-circle", routerLink: "about" }, 
    { label: "Contact Us", icon: "pi pi-envelope", routerLink: "contact" }, 
    { label: "Members", icon: "pi pi-members", routerLink: "memberlist" }, 
  ];

}
