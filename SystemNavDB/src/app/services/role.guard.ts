import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoggedInGuard } from './logged-in.guard';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private authGuard: LoggedInGuard, private authService: AuthenticationService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    await this.authService.setRole();
    console.log(this.authService.role + " hello");
    //call loggedin guard to determine if user is logged in
    return this.authGuard.canActivate(route, state).then((auth: boolean) => {
      if(!auth) {
        console.log("User did not make it past authentication");
        return false;
      }
      //if user has been logged in check role
      else if(auth){
        if(this.authService.role == "Admin"){
          console.log("got into auth");
          return true
        }else{
          this.router.navigate(['/404']);
          return false;
        }
      }
    });
  }
}
