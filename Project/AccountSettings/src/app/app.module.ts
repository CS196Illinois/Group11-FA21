import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ClassesComponent } from './classes/classes.component';
import { BasicsComponent } from './basics/basics.component';
import { SearchComponent } from './classes/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PreferencesComponent,
    ClassesComponent,
    BasicsComponent,
    SearchComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
