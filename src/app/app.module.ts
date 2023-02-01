import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { CardsComponent } from './cards/cards.component';
import { ListcardComponent } from './listcard/listcard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   LandingComponent,
   CardsComponent,
   ListcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
