import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 10), 
    new Ingredient('Basil Leaves', 15),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
