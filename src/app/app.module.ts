import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component.component';
import { SearchComponent } from './home/search/search.component';
import { SearchResultsComponent } from './home/search-results/search-results.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    SearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
