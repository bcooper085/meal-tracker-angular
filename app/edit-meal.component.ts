import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div>
    <div *ngIf="childSelectedMeal">
      <h3>{{childSelectedMeal.name}}</h3>
      <h3>Edit Meal</h3>
      <input [(ngModel)]="childSelectedMeal.name" placeholder="Meal Name">
      <input [(ngModel)]="childSelectedMeal.details" placeholder="Meal Details">
      <input [(ngModel)]="childSelectedMeal.calories" placeholder="Calories">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
