import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  adminBool: boolean;

  constructor(private AuthService: AuthenticationService) { }

  async ngOnInit(): Promise<void>{
    await this.AuthService.setRole();
    if(this.AuthService.role == "Volunteer"){
      console.log("volunteer was here");
      this.adminBool = false;
    }else if (this.AuthService.role == "Admin"){
      console.log("admin was here");
      this.adminBool = true;
    }else{
      console.log("Empty");
    }
  }


  async logout(): Promise<boolean> {
    return await this.AuthService.logout();
  }

  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
