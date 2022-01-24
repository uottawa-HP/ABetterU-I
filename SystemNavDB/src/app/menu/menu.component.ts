import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private logoutService: AuthenticationService) { }

  ngOnInit(): void {
  }


  async logout(): Promise<boolean> {
    // if(this.logoutService.logout()){
    //   this.router.navigate(['/']);
    //   return true;
    // }
    return await this.logoutService.logout();

  }

}
