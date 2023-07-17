import { Component } from '@angular/core';
import Member from './member.model';
import { MemberService } from './member.service';
import { MemberHttpService } from './member-http.service';


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
        <tr *ngFor="let member of members">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
        </tr>
      </tbody>
    </table>

    <button (click)="onTestAjax()">Test Ajax Call</button>
    <hr>
    {{ members | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'async investigation';
  members: Member[] = [];

  constructor(public memberHttpService: MemberHttpService) {
  }

  onTestAjax() {
    this.memberHttpService.getAll()
      .subscribe((members: Member[]) => {
        this.members = members;
      });
  }
}
