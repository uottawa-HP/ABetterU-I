import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'affiliation'
})
export class AffiliationPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.Affiliation.indexOf('Internal')>=0) : check;
}
}
