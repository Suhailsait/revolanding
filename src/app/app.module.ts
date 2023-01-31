import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   LandingComponent,
   CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
