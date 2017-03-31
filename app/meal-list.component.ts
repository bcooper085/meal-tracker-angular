import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select class="btn btn-info" (change)="onChange($event.target.value)">
      <option value="allMeals">All Meals</option>
      <option value="fresh">Fresh</option>
    </select>
  <ul>
    <li *ngFor="let currentMeal of childMealList | freshness:filterByFreshness">Name: {{currentMeal.name}} <br> Details: {{currentMeal.details}} <br> <span [class]="priorityColor(currentMeal)">Calories: {{currentMeal.calories}}</span><br>
    <input class="btn btn-success" *ngIf="currentMeal.fresh === true" type="button" (click)="toggleFresh(currentMeal, false)" value="Fresh"/>
    <input class="btn btn-warning" *ngIf="currentMeal.fresh === false" type="button" (click)="toggleFresh(currentMeal, true)" value="Not Fresh"/>
    <button class="btn btn-primary" (click)="editButtonClicked(currentMeal)">Edit!</button><hr></li>
  </ul>
  `
})

export class MealListComponent {
  filterByFreshness: string = "notFresh";

  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByFreshness = optionFromMenu;
  }

  toggleFresh(clickedMeal: Meal, setFreshness: boolean) {
    clickedMeal.fresh = setFreshness;
  }

  priorityColor(currentMeal){
    if (currentMeal.calories > 500){
      return "bg-danger";
    } else if (currentMeal.calories < 100){
      return "bg-success";
    } else if (currentMeal.calories < 500) {
      return  "bg-warning";
    }
  }
}
