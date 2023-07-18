import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Member from './member.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberHttpService } from './member-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  template: `
    <h1>{{ title | titlecase }}</h1>

    <select size="4">
      <option *ngFor="let member of members$ | async">
        {{ member.name }}
      </option>
    </select>
    <hr>

    {{ member | json }}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'standalone investigation';
  
  member = new Member(1, "Alice", "alice@gmail.com", true);
  
  members$!: Observable<Member[]>;
  
  constructor(public memberHttpService: MemberHttpService) {
  }

  ngOnInit(): void {
    this.members$ = this.memberHttpService.getAll();
  }

}
