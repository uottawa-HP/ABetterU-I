import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  password = '';
  cpassword = '';
  message: string;

  name ='';
  firstname = '';
  lastname = '';
  email ='';
  role='';
  tempUser: any;
  success: boolean;
  fieldTextType: boolean;

  constructor(private authService: AuthenticationService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.tempUser = JSON.parse(localStorage.getItem("user"));
      this.email = this.tempUser.email;
      this.role = this.authService.role;
      this.firstname = this.authService.firstname;
      this.lastname = this.authService.lastname;

    }



  }




  async changePassword() {
    if(this.password != this.cpassword){
      this.message = "Passwords do not match!"
    }else{
      if(await this.authService.changePassword(this.password) == false){
        this.message = this.authService.chgPassErr;
        this.success = false;
        return false;
      }else{
        this.authService.changePassword(this.password);
        this.success = true;
        this.password ='';
        this.cpassword ='';
      }

    }
  }

  toggleFieldTextType(){
       this.fieldTextType = !this.fieldTextType;
     }

  getProfile() {

    let userReference = this.firestore.collection('users', ref => ref.where('email', '==', parseInt(this.email)));
    let query = userReference.valueChanges();
    query.pipe(map(arr => arr[0])).subscribe(value => {
      try {
        this.firstname = value['firstname'];
        this.lastname = value['lastname'];
        this.email = value['email'];
        this.role = value['role'];
      } catch (e) {
      }
    });
  }






  //**IMPLEMENTATION FALL**

}
