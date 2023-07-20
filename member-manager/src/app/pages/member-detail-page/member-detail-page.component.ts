import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Member from '../../models/member.model';
import { MemberHttpService } from '../../services/member-http.service';

@Component({
  selector: 'app-member-detail-page',
  template: `
    Member Detail

    <table>
      <tr>
        <td>Id</td>
        <td>{{ member?.id }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ member?.name }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{ member?.email }}</td>
      </tr>
      <tr>
        <td>Active</td>
        <td>{{ member?.active ? "Active" : "Inactive" }}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./member-detail-page.component.css']
})
export class MemberDetailPageComponent implements OnInit {

  id?: number;

  member?: Member;

  constructor(private activatedRoute: ActivatedRoute, 
              private memberHttpService: MemberHttpService) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id != null) {
      this.memberHttpService.get(parseInt(id))
        .subscribe(member => this.member = member)
    }
  }


}
