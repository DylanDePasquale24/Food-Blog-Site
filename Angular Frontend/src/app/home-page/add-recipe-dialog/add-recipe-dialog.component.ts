import { Component } from '@angular/core';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.css']
})
export class AddRecipeDialogComponent {

  //TODO: change ingredients to an array/object
  recipe : {
    name: string | null,
    description: string | null,
    ingredients: Array<string>,   //store as "ingredient | amnt"
    instructions: string | null
  }
  temp : {
    ingredient: any,
    amount : any
  }

  addedFirstIngredient : boolean

  constructor(){
    this.recipe = {
      name: null,
      description: null,
      ingredients: [],
      instructions: null
    }
    this.temp = {
      ingredient: null,
      amount: null
    }
    this.addedFirstIngredient = false
  }

  AddIngredient(): void{

    //TODO: VERIFY INGREDIENT WITH BACKEND BEFORE YOU ADD IT


    //Empty Inputs
    if(this.temp.ingredient == null || this.temp.amount == null){
      return
    }

    //Amount != Number
    if(!(!(this.temp.amount instanceof Array) && (this.temp.amount - parseFloat(this.temp.amount) + 1) >= 0)){
      return
    }

    //Combine w delimiter
    let combineIngredientAndAmt: string = this.temp.ingredient + " " + '| ' + this.temp.amount
    this.recipe.ingredients.push(combineIngredientAndAmt)
  
    //reset form
    this.temp.ingredient = null
    this.temp.amount = null
    this.addedFirstIngredient = true;
  }
  DeletePrevIngredient(): void{
    this.recipe.ingredients.pop()
  }
}
