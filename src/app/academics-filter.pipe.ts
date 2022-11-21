import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'academicsFilter'
})
export class AcademicsFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Academics')>=0) : check;
}
}
