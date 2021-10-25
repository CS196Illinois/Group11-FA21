import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Libum_Sweet_Cheesecake_ingredients_%26_recipe_%288411812870%29.jpg/764px-Libum_Sweet_Cheesecake_ingredients_%26_recipe_%288411812870%29.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Libum_Sweet_Cheesecake_ingredients_%26_recipe_%288411812870%29.jpg/764px-Libum_Sweet_Cheesecake_ingredients_%26_recipe_%288411812870%29.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
