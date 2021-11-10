import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
{ path: '', component: HomepageComponent },
{ path: 'search-results/:className', component: SearchResultsComponent },
// { path: 'profile/:profileID', component: ProfileComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent, HomepageComponent, HeaderComponent]
})
export class AppModule { }
