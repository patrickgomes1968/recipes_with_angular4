import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
      new Ingredient('Apples', 6),
      new Ingredient('Tomatoes', 10),
    ]
  
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients() {
     return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
