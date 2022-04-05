import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private AuthService: AuthenticationService) { }

  async ngOnInit(): Promise<boolean> {
    return await this.AuthService.logout();
  }

  async returnLogin(){
    this.router.navigate(['/']);
  }

}
