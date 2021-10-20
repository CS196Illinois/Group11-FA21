import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences',
  template: `
    <app-preference></app-preference>
    <app-preference></app-preference>`,
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
