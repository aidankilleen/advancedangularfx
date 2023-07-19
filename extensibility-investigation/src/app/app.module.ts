import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CapitaliseDirective } from './capitalise.directive';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    HighlightDirective,
    CapitaliseDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
