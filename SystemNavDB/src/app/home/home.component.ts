import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { smartsheet } from 'smartsheet';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private router: Router, private AuthService: AuthenticationService) {
    //declare var require: any
      // Initialize the client
 // var client = require('smartsheet');
 /* var smartsheet = client.createClient({
    accessToken: 'gRpg1wAWInfepaPGc7QcikDQUshpp3l66tVVG',
    logLevel: 'info'
  });
*/}



  ngOnInit(): void {
  }



  // async refresh(): Promise<void> {
  //   this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
  //   this.router.navigate(['/home']);
  //   });
  // }

  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  }




}
