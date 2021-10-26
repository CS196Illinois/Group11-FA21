import { Component } from '@angular/core';

@Component({
    selector: 'app-preference',
    templateUrl: './preference.component.html'
})
export class PreferenceComponent {
    //name: type = value;
    preferenceID = 10;
    preferenceStatus = 'offline';
}