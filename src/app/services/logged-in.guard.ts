import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable} from 'rxjs';

import {AuthenticationService} from './authentication.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router, private fireAuth: AngularFireAuth) {}


  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        //returns user to login screen when logged out and user token removed
        if(this.authService.role == null){
          await this.authService.setRole();
        }
         if (this.router.url ==='/logout' || this.router.url === '/' && this.authService.role == null){

           // console.log('logged out');
           this.router.navigate(['/404']);
           return false;
         }
         // determine if the user is logged in from this method.
         else if (this.authService.getUser() == true) {
            console.log("User is logged in");
            return true;
         }

         else if (this.router.url === '/forgotpassword') {
            return true;
         }
         //if 404 error has occured return to login page
         else if(this.router.url ==='/404'){
           console.log("test4040");
           this.authService.logout();
           this.router.navigate(['/']);
           return false;

         }

         else{
           this.authService.redirectUrl = state.url;
           this.router.navigate(['/']);
           return false;
         }

     }



}
