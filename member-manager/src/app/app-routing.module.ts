import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MemberListPageComponent } from './pages/member-list-page/member-list-page.component';
import { MemberDetailPageComponent } from './pages/member-detail-page/member-detail-page.component';
import { isAuthenticatedGuard } from './is-authenticated.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent,  canActivate:[isAuthenticatedGuard] },
  { path: 'memberlist', component: MemberListPageComponent},
  { path: 'memberlist/:id', component: MemberDetailPageComponent }, 
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
