import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperPanelComponent } from './wrapper-panel/wrapper-panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    WrapperPanelComponent,
    AccordionComponent,
    AccordionPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
