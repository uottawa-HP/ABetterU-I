import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';

  constructor(private router: Router, private AuthService: AuthenticationService) { }

  ngOnInit(): void {

  }

  forgotPassword() {
   this.AuthService.forgotPassword(this.email);
   this.email = '';
  }

  async returnLogin(){
    this.router.navigate(['/']);
  }

}
