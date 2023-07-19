import { Component } from '@angular/core';
import Member from './member.model';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="{'darkMode': darkMode}" class="container">
      <h1>{{ title | titlecase }}</h1>

      <form (ngSubmit)="onSubmit(memberForm['value'])" #memberForm="ngForm">
        <label for="id">ID</label>
        <input type="number" name="id" ngModel class="form-control"/>

        <label for="name">Name</label>
        <input type="text" 
                name="name" #name="ngModel" 
                class="form-control"
                ngModel 
                [forbiddenNames]="forbiddenNames"/>

        <div *ngIf="name.invalid && (name.touched || name.dirty)" class="alert alert-danger">
          <div *ngIf="name.errors?.['required']">Name is Required</div>
          <div *ngIf="name.errors?.['minlength']">Minimum length is 3</div>
          <div *ngIf="name.errors?.['forbiddenNames']">{{ name.errors?.['forbiddenNames'].value}}</div>
        </div>


        <label for="email">Email</label>
        <input type="email" name="email" #email="ngModel" ngModel required class="form-control"/>
        <div *ngIf="email.invalid && (email.touched || email.dirty)" class="alert alert-danger">
          Error in email
        </div>        

        <label for="active" class="form-check-label">Active</label>
        <input type="checkbox" name="active" ngModel class="form-check-input"/><br>

        <input type="submit" value="submit" class="btn btn-primary" [disabled]="!memberForm.valid"/>
      </form>
      <hr>
      {{ memberForm.valid }}<br>
      {{ memberForm['value'] | json }}
      <hr>

      
      Dark Mode<input type="checkbox" [(ngModel)] = "darkMode"/>{{ darkMode }}
    <div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms investigation';
  darkMode = false;

  forbiddenNames: string[] = ['nike', 'adidas', 'superdry'];

  onSubmit(member: Member) {
    alert(JSON.stringify(member));
  }
}
