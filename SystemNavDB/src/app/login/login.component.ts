import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  role = '';
  message: string;
  signedIn: boolean;
  staffFound: boolean;

  constructor(private router: Router, private loginService: AuthenticationService, private firestore: AngularFirestore) {
    this.signedIn = false;
  }

  getRole() {
    //reset patientFound and Update flags
    this.staffFound = null;
    let patientReference = this.firestore.collection('users', ref => ref.where('email', '==', this.email));
    let query = patientReference.valueChanges();
    //query.subscribe(value => console.log(value));
    query.pipe(map(arr => arr[0])).subscribe(value => {
      try {
        this.role = value['role'];


      } catch (e) {
        this.staffFound = false;
      }
    })

    if (this.staffFound == false) {
      return;
    }
    this.staffFound = true;
  }

  async checkLogin(): Promise<boolean>{
    this.getRole();
    await this.delay(300)

    if (this.email != '' && this.password !=''){
      if(this.role == "volunteer"){
        if(await this.loginService.signInVolunteer(this.email, this.password) == false){
          this.message = "Invalid email or password";
          return false;
        }else{
            return this.loginService.signInVolunteer(this.email, this.password);
        }
      }

      else if (this.role == "Admin"){
        if(await this.loginService.signIn(this.email, this.password) == false){
          this.message = "Invalid email or password";
          return false;
        }else{
          return this.loginService.signIn(this.email, this.password);
        }
      }
      else{
        this.message = "Account not authorized for Login!"

      }

    }else{
      this.message = 'Invalid Login! Email or password is missing!'
    }
  }


  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
