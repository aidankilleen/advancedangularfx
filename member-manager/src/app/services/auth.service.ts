import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from '../models/user.model';
import { ApiService } from './api.service';
import ApiToken from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) { 
    this._isLoggedIn$.next(false);
  }

  login(user: User) {

    this.apiService.login(user)
      .subscribe((apiToken: ApiToken) => {

        if (apiToken.token) {
          this._isLoggedIn$.next(true);
        }
      });
    /*
    if (user.email == "aidan@gmail.com" && user.password == "password") {
      this._isLoggedIn$.next(true);

    }
    */
  }

  logout() {
    this._isLoggedIn$.next(false);
  }
}
