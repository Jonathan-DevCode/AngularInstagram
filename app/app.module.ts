import { SuggestionsModule } from './suggestions/suggestions.module';
import { FeedModule } from './feed/feed.module';
import { StatusModule } from './status/status.module';
import { NavbarModule } from './navbar/navbar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    StatusModule,
    FeedModule,
    SuggestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
