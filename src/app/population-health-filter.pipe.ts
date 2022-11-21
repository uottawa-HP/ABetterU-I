import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'populationHealthFilter'
})
export class PopulationHealthFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Population Health')>=0) : check;
}


}
