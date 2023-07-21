import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}{{ loggedIn ? " (logged in)" : ""}}</h1>
    <navigation></navigation>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'member manager';
  loggedIn = false;

  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn);
  }

  
}
