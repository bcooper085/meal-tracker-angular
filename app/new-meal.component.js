"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.submitMeal = function (name, details, calories) {
        var newMealToAdd = new meal_model_1.Meal(name, details, calories);
        this.newMealSender.emit(newMealToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "newMealSender", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: "\n  <div class=\"newMealForm\">\n    <h1>New Meal</h1>\n    <input #newName placeholder=\"Meal Name\">\n    <input #newDetails placeholder=\"Meal Details\">\n    <input #newCalories placeholder=\"Calories\">\n    <button class=\"btn btn-primary\" (click)=\"submitMeal(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';\">Add Meal</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map