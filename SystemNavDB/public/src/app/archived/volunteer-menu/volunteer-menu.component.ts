import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-volunteer-menu',
  templateUrl: './volunteer-menu.component.html',
  styleUrls: ['./volunteer-menu.component.css']
})
export class VolunteerMenuComponent implements OnInit {

  constructor(private router: Router, private logoutService: AuthenticationService) { }

  ngOnInit(): void {
  }


  async logout(): Promise<boolean> {

    return await this.logoutService.logout();

  }

}
