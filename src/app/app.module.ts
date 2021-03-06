import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgTranslationsModule } from 'projects/madestoel/ng-translations/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTranslationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
