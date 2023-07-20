import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import Member from '../../models/member.model';
import { MemberHttpService } from '../../services/member-http.service';

@Component({
  selector: 'app-member-list-page',
  template: `
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let member of members$ | async">
          <td><a routerLink="{{ member.id }}">{{ member.id }}</a></td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./member-list-page.component.css']
})
export class MemberListPageComponent implements OnInit {

  members$!: Observable<Member[]>;

  constructor(public memberHttpService: MemberHttpService) {

  }

  ngOnInit(): void {
    this.members$ = this.memberHttpService.getAll();
  }

}
