import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  
  @Output() recipePicked = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Turkey Sandwich', 'A tender turkey meat with refreshing vegetables.', 'assets/images/Turkey_Sandwich.jpg')
  ]

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe){
    this.recipePicked.emit(recipe);
  }
}
