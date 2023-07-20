import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import Member from '../../models/member.model';
import { MemberHttpService } from '../../services/member-http.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-member-list-page',
  templateUrl: './member-list-page.component.html', 
  styleUrls: ['./member-list-page.component.css'], 
  providers: [MessageService, ConfirmationService]
})
export class MemberListPageComponent implements OnInit {

  //members$!: Observable<Member[]>;

  members: Member[] = [];
  clonedMembers: { [s: string]: Member } = {};

  constructor(public memberHttpService: MemberHttpService, 
              private messageService: MessageService, 
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    //this.members$ = this.memberHttpService.getAll();

    this.memberHttpService.getAll()
      .subscribe(members => this.members = members);
  }
  onRowEditInit(member: Member) {
    this.clonedMembers[`${member.id}`] = { ...member };  // = JSON.parse(JSON.stringify(member));
  }
  onRowEditSave(member: Member) {
    this.memberHttpService.update(member)
      .subscribe(updatedMember => {
        delete this.clonedMembers[`${ member.id }`];

        this.messageService.add({severity: 'success', summary: "Saved", detail: "The record was saved"});
      });
  }
  onRowEditCancel(member: Member, index: number) {
    this.members[index] = this.clonedMembers[`${member.id}`];
    delete this.clonedMembers[`${member.id}`];
  }

  onDelete(member: Member) {

    this.confirmationService.confirm({
      message: "Are you sure?",
      header: `Delete user ${ member.id }`, 
      icon: 'pi pi-exclamation-triangle', 
      accept: ()=>{

        this.memberHttpService.delete(member.id)
        .subscribe(()=> {
          let index = this.members.findIndex(m => m.id == member.id);
          this.members.splice(index, 1);

          this.messageService.add({severity: 'error', summary: 'deleted', detail: 'The member was deleted'});
        });

      }, 
      reject: ()=>{}
    })
  }
}
