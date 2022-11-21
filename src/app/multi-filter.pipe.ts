import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiFilter',
})

export class MultiFilterPipe implements PipeTransform {

    transform(check: any, checked?: any): any {
        return checked ? check.filter(check => check.Language == 'MULTI') : check;
    }

}
