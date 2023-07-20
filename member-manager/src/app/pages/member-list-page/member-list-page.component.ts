import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import Member from '../../models/member.model';
import { MemberHttpService } from '../../services/member-http.service';

@Component({
  selector: 'app-member-list-page',
  template: `

    <p-table [value]="(members$ | async)!" editMode="row">
      <ng-template pTemplate="header">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>&nbsp;</th>          
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-member let-editing="editing" let-ri="rowIndex">
        <tr [pEditableRow]="member">
          <td><a routerLink="{{ member.id }}">{{ member.id }}</a></td>

          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input [(ngModel)]="member.name"/>
              </ng-template>
              <ng-template pTemplate="output">
                {{ member.name }}
              </ng-template>
            </p-cellEditor>
          </td>



          <td>{{ member.email }}</td>
          <td>{{ member.active ? "Active" : "Inactive" }}</td>
          <td>
            <button 
              *ngIf="!editing" 
              pButton pRipple type="button" 
              pInitEditableRow 
              icon="pi pi-pencil" 
              
              class="p-button-rounded p-button-text">
            </button>
            <!--
            <button *ngIf="editing" pButton pRipple type="button" pSaveEditableRow icon="pi pi-check" (click)="onRowEditSave(product)" class="p-button-rounded p-button-text p-button-success mr-2"></button>
            <button *ngIf="editing" pButton pRipple type="button" pCancelEditableRow icon="pi pi-times" (click)="onRowEditCancel(product, ri)" class="p-button-rounded p-button-text p-button-danger"></button>
            -->            

          </td>          
        </tr>
      </ng-template>
    </p-table>

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
