import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatHoverScrollModule } from 'ngx-mat-hover-scroll';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMatHoverScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
