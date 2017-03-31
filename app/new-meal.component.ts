import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="new-meal-form">
    <h1 class="meal-label">New Meal</h1>
    <input #newName placeholder="Meal Name">
    <input #newDetails placeholder="Meal Details">
    <input #newCalories placeholder="Calories"><br>
    <button class="btn btn-primary" (click)="submitMeal(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add Meal</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitMeal(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
