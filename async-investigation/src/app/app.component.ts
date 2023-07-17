import { Component } from '@angular/core';
import Member from './member.model';
import { MemberService } from './member.service';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1>{{ title | titlecase }}</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let member of memberService.getAll()">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
        </tr>
      </tbody>
    </table>

    <hr>
    {{ memberService.getAll() | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'async investigation';

  constructor(public memberService: MemberService) {
  }
}
