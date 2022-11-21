import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkboxFilter',
})

export class CheckboxFilterPipe implements PipeTransform {

    transform(check: any, checked?: any): any {
        return checked ? check.filter(check => check.Language == 'BIL'|| check.Language == 'EN' ) : check;
    }

}
