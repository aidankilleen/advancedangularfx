import { Injectable } from '@angular/core';
import Member from './member.model';
import { MemberHttpService } from './member-http.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public members: Member[] = [];

  constructor(private memberHttpService: MemberHttpService) { 

  }

  getAll() {
    this.memberHttpService.getAll()
      .subscribe((members: Member[])=>{

        this.members = members;
      });

    // return this.members;
  }
}
