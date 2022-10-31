import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  password = '';
  cpassword = '';
  message: string;

  changePassword() {
    if(this.password != this.cpassword){
      this.message = "Passwords do not match!"
    }else{
      this.authService.changePassword(this.password);
    }


  }

  //**IMPLEMENTATION FALL**

}
