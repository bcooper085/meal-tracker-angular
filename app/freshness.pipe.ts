import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "freshness",
  pure: false
})

export class FreshnessPipe implements PipeTransform {

  transform(input: Meal[], desiredFreshness){
    var output: Meal[] = [];
    if(desiredFreshness === "notfresh") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].fresh === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFreshness === "fresh") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].fresh === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
