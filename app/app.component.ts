import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
     <h1>Recipe Box</h1>
     <ul>
      <li [class]="priorityColor(currentRecipe)" (click)="isCooked(currentRecipe)" *ngFor="let currentRecipe of recipes">{{currentRecipe.name}} - {{currentRecipe.ingredient}} <button (click)="editRecipe(currentRecipe)">Edit</button></li>
    </ul>
    <hr>
    <div *ngIf="selectedRecipe">
     <h3>{{selectedRecipe.name}}</h3>
     <p>Recipe Complete? {{selectedRecipe.cooked}}</p>
    <h3>Edit Recipe</h3>
    <label>Enter Recipe Ingredients:</label>
    <input [(ngModel)]="selectedRecipe.ingredient">
     <label>Enter Recipe Priority (1-3):</label>
     <br>
     <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1">1 (Low Priority)<br>
     <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2">2 (Medium Priority)<br>
     <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3">3 (High Priority)<br>
     <button (click)="finishedEditing()">Done</button>
    </div>
   </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'dough, cheese, sauce', 3),
    new Recipe('Nachos', 'cheese, chips', 2)
  ];

  // selectedRecipe: Recipe = this.recipes[0];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  isCooked(clickedRecipe: Recipe) {
    if(clickedRecipe.cooked === true) {
      alert("This recipe is ready!");
    } else {
      alert("This recipe is not done. Better get to work!");
    }
  }

  priorityColor(currentRecipe){
    if (currentRecipe.priority === 3){
      return "bg-danger";
    } else if (currentRecipe.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  public cooked: boolean = false;
  constructor(public name: string, public ingredient: string, public priority: number) { }
}
