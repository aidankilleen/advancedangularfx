import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navigation',
  template: `

    <div class="card">
        <p-menubar [model]="items"></p-menubar>
    </div>
  `,
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedIn = false;
  items = [
    { label: "Home", icon: "pi pi-home", routerLink: "home" }, 
    { label: "About", icon: "pi pi-question-circle", routerLink: "about" }, 
    { label: "Contact Us", icon: "pi pi-envelope", routerLink: "contact" }, 
    { label: "Members", icon: "pi pi-users", routerLink: "memberlist" }, 
    { label: "Account", icon: "pi pi-user", 
      items: [
        { 
          label: "Login", 
          command: () => {
            this.authService.login();
          }, 
          disabled: !this.loggedIn
        }, 
        { 
          label: "Logout", 
          command: () => {
            this.authService.logout();
          }, 
          disabled: this.loggedIn
        }
    ] }
  ];

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;

      let accountMenu = this.items.find(item => item.label == "Account");

      if (accountMenu?.items) {
        let loginMenu = accountMenu.items.find(item => item.label == "Login")
        if (loginMenu) {
          loginMenu.disabled =  this.loggedIn;
        }
        let logoutMenu = accountMenu.items.find(item => item.label == "Logout")
        if (logoutMenu) {
          logoutMenu.disabled =  !this.loggedIn;
        }
      }
    });
  }

}
