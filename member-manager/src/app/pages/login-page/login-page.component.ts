import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login-page',
  template: `
    <div *ngIf="loggedIn">
      You are logged in
    </div>
    <div *ngIf="!loggedIn">

      <div class="card">
        <div class="flex flex-wrap align-items-center justify-content-center card-container">
          <div class="flex align-items-center justify-content-center">
            <span class="p-float-label">
                      <input 
                          type="email" 
                          name="email" 
                          [(ngModel)]="user.email"
                          pInputText
                          class="form-control"/>
                      <label for="email">Email</label>      
            </span>    <br>

            <span class="p-float-label">
              <p-password [(ngModel)]="user.password" [feedback]="false"></p-password>
              <label for="password">Password</label>      
            </span>    <br>

            <p-button label="Login" (click)="onClick()"></p-button>
            </div>
        </div>
      </div>

    </div>
  `,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loggedIn = false;

  user:User = new User();

  constructor(private authService: AuthService) {
    
  }
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn);
  }

  onClick() {
    this.authService.login(this.user);
  }
}
