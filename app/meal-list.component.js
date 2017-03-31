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
var MealListComponent = (function () {
    function MealListComponent() {
        this.filterByFreshness = "notFresh";
        this.clickSender = new core_1.EventEmitter();
    }
    MealListComponent.prototype.editButtonClicked = function (mealToEdit) {
        this.clickSender.emit(mealToEdit);
    };
    MealListComponent.prototype.onChange = function (optionFromMenu) {
        this.filterByFreshness = optionFromMenu;
    };
    MealListComponent.prototype.toggleFresh = function (clickedMeal, setFreshness) {
        clickedMeal.fresh = setFreshness;
    };
    MealListComponent.prototype.priorityColor = function (currentMeal) {
        if (currentMeal.calories > 500) {
            return "bg-danger";
        }
        else if (currentMeal.calories < 100) {
            return "bg-success";
        }
        else if (currentMeal.calories < 500) {
            return "bg-warning";
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MealListComponent.prototype, "childMealList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MealListComponent.prototype, "clickSender", void 0);
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n  <select class=\"btn btn-info\" (change)=\"onChange($event.target.value)\">\n      <option value=\"allMeals\">All Meals</option>\n      <option value=\"fresh\">Fresh</option>\n    </select>\n  <ul>\n    <li *ngFor=\"let currentMeal of childMealList | freshness:filterByFreshness\">Name: {{currentMeal.name}} <br> Details: {{currentMeal.details}} <br> <span [class]=\"priorityColor(currentMeal)\">Calories: {{currentMeal.calories}}</span><br>\n    <input class=\"btn btn-success\" *ngIf=\"currentMeal.fresh === true\" type=\"button\" (click)=\"toggleFresh(currentMeal, false)\" value=\"Fresh\"/>\n    <input class=\"btn btn-warning\" *ngIf=\"currentMeal.fresh === false\" type=\"button\" (click)=\"toggleFresh(currentMeal, true)\" value=\"Not Fresh\"/>\n    <button class=\"btn btn-primary\" (click)=\"editButtonClicked(currentMeal)\">Edit!</button><hr></li>\n  </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map