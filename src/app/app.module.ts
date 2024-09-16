import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEntriesComponent } from './entries/all-entries/all-entries.component';
import { NewEntryComponent } from './entries/new-entry/new-entry.component';
import { EntryDetailComponent } from './entries/entry-detail/entry-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllEntriesComponent,
    NewEntryComponent,
    EntryDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
