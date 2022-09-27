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
    if(this.AuthService.role != null){
      await this.AuthService.setRole();
      await this.delay(1);
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
    // else if(this.AuthService.role == null){
    //   await this.AuthService.setRole2();
    //   await this.delay(1);
    //   if(this.AuthService.role == "Volunteer"){
    //     console.log("volunteer was here");
    //     this.adminBool = false;
    //   }else if (this.AuthService.role == "Admin"){
    //     console.log("admin was here");
    //     this.adminBool = true;
    //   }else{
    //     console.log("Role is Null");
    //   }
    // }

  }


  async logout(): Promise<boolean> {
    return await this.AuthService.logout();
  }

  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
