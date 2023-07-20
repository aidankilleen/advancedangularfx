import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Member from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberHttpService {

  url: string = "http://localhost:3000/members";

  constructor(private httpClient: HttpClient) { 
    
  }

  get(id: number): Observable<Member> {
    return this.httpClient.get<Member>(`${this.url}/${id}`);
  }
  
  getAll(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.url);
  }
}
