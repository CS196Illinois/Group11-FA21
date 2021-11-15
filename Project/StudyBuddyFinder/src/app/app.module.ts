import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { BasicsComponent } from './basics/basics.component';
import { ClassesComponent } from './classes/classes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserprofileComponent } from './userprofile/userprofile.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchResultsComponent,
    SettingsComponent, 
    PreferencesComponent,
    BasicsComponent,
    ClassesComponent, 
    NavigationComponent,
    UserprofileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HomepageComponent,
    HeaderComponent,
    SettingsComponent
  ]
})
export class AppModule { }
