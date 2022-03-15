import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { IResource } from '../Interfaces';
import { ResourceService } from '../resource.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  healthTheme:string;
  subTopic:string;
  tag:string;
  category:string;
  language:string;
  name:string;
  description:string;
  webLink:string;

  constructor(private router: Router, private AuthService: AuthenticationService, private RService: ResourceService) {

  }

  ngOnInit(): void {
    this.RService.getResources();
  }


  // async refresh(): Promise<void> {
  //   this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
  //   this.router.navigate(['/home']);
  //   });
  // }

  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  }

  async getResources(): Promise<void> {

  }




}
