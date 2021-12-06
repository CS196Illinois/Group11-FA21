import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  username!: string;
  userInformation = {
    name: "",
    major: "",
    contact: "",
    prefEnv: "",
    prefLocations: ""
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Grab the parameter as name

    this.username = this.route.snapshot.params['username'];
    if (this.username == 'Sailaja') {
      this.userInformation = {
        name: "Sailaja",
        major: "CS",
        contact: "123-456-6789",
        prefEnv: "3/5",
        prefLocations: "Dorm, Outside"
      }
    }
    else if (this.username == 'Shreya') {
      this.userInformation = {
        name: "Shreya",
        major: "CS",
        contact: "123-456-6789",
        prefEnv: "3/5",
        prefLocations: "Dorm, Library"
      }
    }
    else if (this.username == 'Dimple') {
      this.userInformation = {
        name: "Dimple",
        major: "CS",
        contact: "123-456-6789",
        prefEnv: "2/5",
        prefLocations: "Dorm"
      }
    }
    else if (this.username == 'Ishq') {
      this.userInformation = {
        name: "Ishq",
        major: "CS",
        contact: "123-456-6789",
        prefEnv: "4/5",
        prefLocations: "Library, Outside"
      }
    }
    else if (this.username == 'Sahithya') {
      this.userInformation = {
        name: "Sahithya",
        major: "CS",
        contact: "123-456-6789",
        prefEnv: "2/5",
        prefLocations: "Outside"
      }
    }
    else {
      this.userInformation = {
        name: "None",
        major: "None",
        contact: "None",
        prefEnv: "None",
        prefLocations: "None"
      }
    }
  }
}
