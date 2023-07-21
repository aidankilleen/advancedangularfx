import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ApiToken from '../models/token.model';
import { Observable } from 'rxjs';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:3000/auth/login";
  constructor(private httpClient: HttpClient) { }

  login(user:User): Observable<ApiToken> {

    return this.httpClient.post<ApiToken>(this.url, user);

  }
}
