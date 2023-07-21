import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  public isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor() { 
    this._isLoggedIn$.next(false);
  }

  login() {
    this._isLoggedIn$.next(true);
  }

  logout() {
    this._isLoggedIn$.next(false);
  }
}
