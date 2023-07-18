import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtmodModule } from './ptmod/ptmod.module';
import { FxmodModule } from './fxmod/fxmod.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    PtmodModule, 
    FxmodModule, 
    ButtonModule, 
    AccordionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
