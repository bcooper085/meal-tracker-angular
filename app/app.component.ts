import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
    <div class="jumbotron">
     <h1>Meal Tracker</h1>
    </div>
    <h1>Daily Meals</h1>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
   </div>
  `
})

export class AppComponent {
  selectedMeal: Meal = null;

  masterMealList: Meal[] = [
    new Meal('Pizza', 'I ate the whole thing!', 1895),
    new Meal('Nachos', 'these were great', 2201)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild) {
    this.masterMealList.push(newMealFromChild);
  }
}
