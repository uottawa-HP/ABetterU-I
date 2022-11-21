import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'physicalHealthFilter'
})
export class PhysicalHealthFilterPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.HealthTopic.indexOf('Physical Health') >= 0  ) : check;
}

}
