import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("First Recipe", "This is my first recipe", "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg"),
    new Recipe("First Recipe", "This is my first recipe", "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg")
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
