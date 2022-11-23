import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'affiliationExternal'
})
export class AffiliationExternalPipe implements PipeTransform {

  transform(check: any, checked?: any): any {
    return checked ? check.filter(check => check.Affiliation.indexOf('External')>=0) : check;
}

}
