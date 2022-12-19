import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppHeaderComponent} from './app-header/app-header.component';
import {ConferenceOverviewComponent} from './conference-overview/conference-overview.component';
import {ConferenceDetailComponent} from './conference-detail/conference-detail.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ConferenceOverviewComponent,
    ConferenceDetailComponent,
  ],
  imports: [BrowserModule, NgbModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ConferenceOverviewComponent, ConferenceDetailComponent],
})
export class AppModule {
}
