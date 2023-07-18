import { Component, OnInit } from '@angular/core';
import Member from './member.model';
import { MemberService } from './member.service';
import { MemberHttpService } from './member-http.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `

    <h1><i class="fa fa-users"></i>Member Manager</h1>
    <hr>

    <button (click)="onAdd()"><i class="fa fa-user-plus"></i></button>

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
            <button (click)="onDelete(member.id)"><i class="fa fa-trash"></i></button>
            <button (click)="onUpdate(member)"><i class="fa fa-edit"></i></button>
          </td>
        </tr>
      </tbody>
    </table>

    <member-dialog 
      [show]="showDialog"
      [member]="editingMember"
      (cancel)="showDialog=false"
      (save)="onSave($event)">
    </member-dialog>
    <confirm-dialog
      [show]="showConfirmDialog"
      (ok) = "onOk()"
      (cancel) = "onCancel()"
      [message] = "confirmDialogMessage"
    >
    </confirm-dialog>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'async investigation';

  showDialog:boolean = false;
  showConfirmDialog: boolean = false;
  confirmDialogMessage: string = "";

  editingMember: Member = new Member();
  idToDelete: number = 0;

  members$!: Observable<Member[]>;

  constructor(public memberService: MemberService, 
              public memberHttpService: MemberHttpService) {
  }
  ngOnInit(): void {
    this.members$ = this.memberHttpService.getAll();
  }

  onSave(member: Member) {
    if (member.id == 0) {
      // new member save
      this.memberHttpService.add(member)
      .subscribe((addedMember: Member) => {
        this.members$ = this.memberHttpService.getAll();
        this.showDialog = false;
      });

    } else {
      // edit member save
      this.memberHttpService.update(member)
      .subscribe((updatedMember:Member) => {
        this.showDialog = false;
      })
    }
  }

  onUpdate(member: Member) {
    this.editingMember = member;
    this.showDialog = true;
  }

  onDelete(id: number) {
    this.idToDelete = id;
    this.confirmDialogMessage = `Delete user ${ id }`;
    this.showConfirmDialog = true;
  }

  onAdd() {
    let member = new Member(0, "New Member", "new.member@gmail.com", false);
    this.showDialog = true;
  }

  onOk() {
    this.memberHttpService.delete(this.idToDelete)
    .subscribe(()=> {
      this.members$ = this.memberHttpService.getAll();
      this.showConfirmDialog = false;
    });
  }

  onCancel() {
    this.showConfirmDialog = false;
  }
}
