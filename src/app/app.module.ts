import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdCheckboxModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
