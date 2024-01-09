import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../models/ingredient.model";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css'
})
export class ShoppingComponent implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient("Test Ingredient", 5),
    new Ingredient("Test Ingredient Two", 10)
  ];

  constructor() {
  }
  ngOnInit() {
  }

}
