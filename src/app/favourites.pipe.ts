import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Pipe({
  name: 'favourites'
})
export class FavouritesPipe implements PipeTransform {
  


  transform(check: any, arg1: any, checked?:any): any  {
    return checked? check.filter(check => arg1.includes(check.id)): check;

    
}
}
