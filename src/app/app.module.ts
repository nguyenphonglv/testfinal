import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{PhonglvModule} from 'phonglv'
import { FormatphongModule } from 'formatphong';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhonglvModule,
    FormatphongModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
