import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substanceUseHealthFilter'
})
export class SubstanceUseHealthFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Substance Use Health')>=0) : check;
}


}
