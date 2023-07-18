import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Member from './member.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberHttpService {

  url: string = "http://localhost:3000/members";

  constructor(private httpClient: HttpClient) { 
  }

  getAll(): Observable<Member[]> {

    return this.httpClient.get<Member[]>(this.url);
  }

}
