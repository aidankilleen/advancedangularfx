import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Member from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberHttpService {
  
  url = "http://localhost:3000/members";
  constructor(private httpClient: HttpClient) { 
    
  }
  
  public getAll(): Observable<Member[]> {
    
    return this.httpClient.get<Member[]>(this.url);
    
    //let obs:Observable<Member[]> = this.httpClient.get<Member[]>(this.url);
    
    //obs.subscribe((data:Member[])=>{
      
      //  alert(JSON.stringify(data));
      //})
      
    }
    delete(id: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.url}/${id}`);
    }

    add(member: Member): Observable<Member> {

      return this.httpClient.post<Member>(this.url, member);

    }
    update(member: Member): Observable<Member> {

      return this.httpClient.put<Member>(`${this.url}/${member.id}`, member);

    }
}
