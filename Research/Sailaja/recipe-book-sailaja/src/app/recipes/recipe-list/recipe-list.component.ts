import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta', 'Italian Food', 'https://commons.wikimedia.org/wiki/File:Pasta_e_ceci_(Anelli)_2.jpg'), new Recipe('Falafel Wrap', 'Mediterranean Food', 'https://pixabay.com/photos/falafel-food-arabic-kitchen-5203363/')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
