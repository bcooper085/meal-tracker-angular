import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="healthy">Healthy</option>
      <option value="nothealthy">Not Healthy</option>
    </select>
  <ul>
    <li *ngFor="let currentMeal of childMealList | healthyness:filterByHealthy">Name: {{currentMeal.name}} <br> Details: {{currentMeal.details}} <br> <span [class]="priorityColor(currentMeal)">Calories: {{currentMeal.calories}}</span>
    <button class="btn btn-success" (click)="editButtonClicked(currentMeal)">Edit!</button><hr></li>
  </ul>
  `
})

export class MealListComponent {
  filterByHealthy: string = "healthy";

  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu: string) {
    this.filterByHealthy = optionFromMenu;
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
