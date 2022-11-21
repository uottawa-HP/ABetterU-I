import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mentalHealthFilter'
})
export class MentalHealthFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Mental Health')>=0) : check;
}


}
