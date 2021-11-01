import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  people: String[] = [
    "Sailaja",
    " Shreya",
    " Dimple",
    " Ishq",
    " Sahithya"
  ];

  className!: String;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe();
    this.className = this.route.snapshot.params['className'];
  }

  //localhost:5000/get-students-class/:classID

}
