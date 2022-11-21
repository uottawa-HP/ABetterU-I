import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexualHealthFilter',
})

export class SexualHealthFilterPipe implements PipeTransform {

    transform(check: any, checked?: any): any {
        return checked ? check.filter(check => check.HealthTopic.indexOf('Sexual & Reproductive Health') >= 0  ) : check;
    }

}
