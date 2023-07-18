import { Component, OnInit } from '@angular/core';
import Member from './member.model';
import { MemberService } from './member.service';
import { MemberHttpService } from './member-http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <button (click)="onAdd()">Add Member</button>
    <h1>{{ title | titlecase }}</h1>
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
        <tr *ngFor="let member of members$ | async">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
          <td>
            <button (click)="onDelete(member.id)">delete</button>
            <button (click)="onUpdate(member)">edit</button>
          </td>
        </tr>
      </tbody>
    </table>

    <member-dialog [show]="showDialog"></member-dialog>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'async investigation';

  showDialog:boolean = false;

  members$!: Observable<Member[]>;

  constructor(public memberService: MemberService, 
              public memberHttpService: MemberHttpService) {
  }
  ngOnInit(): void {
    this.members$ = this.memberHttpService.getAll();
  }

  onUpdate(member: Member) {

    member.active = !member.active;

    this.memberHttpService.update(member)
      .subscribe((updatedMember:Member) => {
        //alert(JSON.stringify(updatedMember))
      })
  }
  onDelete(id: number) {
    if (confirm(`Delete id:${id} are you sure?`)) {

      this.memberHttpService.delete(id)
        .subscribe(()=> {
          this.members$ = this.memberHttpService.getAll();
        });
    }
  }
  onAdd() {
    let member = new Member(0, "New Member", "new.member@gmail.com", false);

    this.showDialog = true;
    /*
    this.memberHttpService.add(member)
      .subscribe((addedMember: Member) => {
        this.members$ = this.memberHttpService.getAll();
      })
    */
   
  }
}
