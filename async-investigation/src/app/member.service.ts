import { Injectable } from '@angular/core';
import Member from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members: Member[] = [
    new Member(1, "Alice", "alice@gmail.com", false),
    new Member(2, "Bob", "alice@gmail.com", false),
    new Member(3, "Carol", "alice@gmail.com", false),
    new Member(4, "Dan", "alice@gmail.com", true),
    { id: 5, name: "Eve", email: "eve@gmail.com", active: true }
  ];

  constructor() { }

  getAll(): Member[] {
    return this.members;
  }
}
