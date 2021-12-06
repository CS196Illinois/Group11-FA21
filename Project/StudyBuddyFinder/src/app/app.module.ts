import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { BasicsComponent } from './basics/basics.component';
import { ClassesComponent } from './classes/classes.component';
import { SettingsComponent } from './settings/settings.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const appRoutes: Routes = [
{ path: '', component: HomepageComponent },
{ path: 'search-results', component: SearchResultsComponent },
{ path: 'calendar', component: CalendarComponent },
{ path: '', component: HomepageComponent },
{ path: 'search-results/:className', component: SearchResultsComponent },
{ path: 'user/:username', component: UserprofileComponent},
{ path: 'settings', component: SettingsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchResultsComponent,
    CalendarComponent,
    PreferencesComponent,
    HeaderComponent,
    BasicsComponent,
    ClassesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent, HomepageComponent, HeaderComponent]
})
export class AppModule { }
