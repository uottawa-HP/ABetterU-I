import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})

export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(!value)return null;
      if(!args)return value;

      args = args.toString().toLowerCase();

      return value.filter(function(data){
          return JSON.stringify(data).toString().toLowerCase().includes(args);
      });
  }

}
