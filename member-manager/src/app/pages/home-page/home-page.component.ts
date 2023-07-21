import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  template: `

    {{ loggedIn }}

    <button (click)="onLogin()">Login</button>
    <button (click)="onLogout()">Logout</button>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  loggedIn = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.isLoggedIn$
      .subscribe(loggedIn => this.loggedIn = loggedIn);
  }
  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }



}
