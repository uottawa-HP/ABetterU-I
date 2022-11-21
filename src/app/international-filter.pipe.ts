import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internationalFilter'
})
export class InternationalFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('International and Newcomer Service')>=0) : check;
}


}
