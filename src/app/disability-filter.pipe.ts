import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disabilityFilter'
})
export class DisabilityFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Disability Services')>=0) : check;
}

}
