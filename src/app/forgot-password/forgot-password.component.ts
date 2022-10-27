import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';

  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {

  }

  forgotPassword() {
   this.auth.forgotPassword(this.email);
   this.email = '';
  }

}
