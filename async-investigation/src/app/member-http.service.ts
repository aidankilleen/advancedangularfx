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
}
