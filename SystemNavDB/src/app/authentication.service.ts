import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {noop, BehaviorSubject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string;
  currentUser: null;
  user: boolean = false;
  tempUser: any;
  email: any;

  role: string;

  constructor(private router: Router, private firestore: AngularFirestore, private fireAuth: AngularFireAuth) {}




  async signIn(email: string, password: string) {
    try {

        await this.fireAuth.signInWithEmailAndPassword(email, password).then(res=>{
          localStorage.setItem('user', JSON.stringify(res.user));
        })
        this.tempUser = JSON.parse(localStorage.getItem("user"));
        this.email = this.tempUser.email;


        // localStorage.setItem('user', JSON.stringify(user));

        this.router.navigate(['/home']);
        this.user=true;
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
  }


  async signInVolunteer(email: string, password: string) {
    try {
        // if (!email || !password) throw new Error('Invalid email and/or password');
        await this.fireAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/volunteermenu']);
        this.user=true;
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
  }



  async signUp(email: string, password: string) {
    try {
        if (!email || !password) throw new Error('Invalid email and/or password');
        await this.fireAuth.createUserWithEmailAndPassword(email, password);

        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
  }




  async logout(){
    try{
      await this.fireAuth.signOut();
      localStorage.removeItem('user')
      console.log(localStorage.getItem('user'));
      await this.delay(100)
      console.log("Signed out");
      this.user = false;
      // console.log(this.user)
      this.router.navigate(['/logout']);

      return true;
    } catch (error){
      console.log("Logout Failed", error);
      return false;
    }
  }

  getUser(): boolean {
    if(localStorage.getItem('user')){
      console.log(localStorage.getItem('user'));
      return true;
    }
    var storageUser = localStorage.getItem('user');
    if (storageUser) {
      try {
        this.fireAuth.currentUser = JSON.parse(storageUser);
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    return true;
  }

  async getRole() {
    //reset patientFound and Update flags
    console.log(this.email);
    let userRef = this.firestore.collection('users', ref => ref.where('email', '==', this.email));
    let query = userRef.valueChanges();
    query.pipe(map(arr => arr[0])).subscribe(value => {
      try {
        this.role = value['role'];


      } catch (e) {
      }
    })
  }

  async setRole(): Promise<void>{
    this.getRole();

    await this.delay(500);
    console.log(this.role);
  }




  isLoggedIn(): boolean {
    if(this.user!=false){
      console.log(this.user)
      return true;
    }else{
      console.log(this.user)
      return false;
    }
    // console.log(this.fireAuth.currentUser)
    // return this.getUser() != null;
  }



  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
