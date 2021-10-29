import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
