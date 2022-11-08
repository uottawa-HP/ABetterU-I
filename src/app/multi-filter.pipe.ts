import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiFilter',
})

export class MultiFilterPipe implements PipeTransform {

    transform(check: any, checked?: any): any {
        console.log("CHECK", check);
        console.log("CHECKED", checked);
        return checked ? check.filter(check => check.Language == 'MULTI') : check;
    }

}
