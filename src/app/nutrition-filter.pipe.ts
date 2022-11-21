import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nutritionFilter'
})
export class NutritionFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Nutrition')>=0) : check;
}


}
