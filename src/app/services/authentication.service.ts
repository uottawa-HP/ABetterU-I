import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {noop, BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
// import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string;
  // currentUser: null;
  user: boolean = false;
  tempUser: any;
  email: any;

  role: string;
  currentUser;





  constructor(private router: Router, private firestore: AngularFirestore, private fireAuth: AngularFireAuth) {
    this.fireAuth.onAuthStateChanged((user)=>(this.currentUser = user));
  }





  async signIn(email: string, password: string) {
    try {

        await this.fireAuth.signInWithEmailAndPassword(email, password).then(res=>{
          localStorage.setItem('user', JSON.stringify(res.user));
        })
        this.tempUser = JSON.parse(localStorage.getItem("user"));
        this.email = this.tempUser.email;
        console.log("the email signing in is: "+ this.email);
        // localStorage.setItem('user', JSON.stringify(user));
        await this.delay(100);
        this.router.navigate(['/home']);
        this.user=true;
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
  }


//creates user with in firebase auth
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
      this.user = false;
      this.role = "";
      this.tempUser = null;
      this.email = "";
      await this.delay(100)
      console.log("Signed out");
      console.log("Email signed in with is: "+ this.email);

      this.router.navigate(['/logout']);

      return true;
    } catch (error){
      console.log("Logout Failed", error);
      return false;
    }
  }

  //get current user from browser localStorage and remove the token if user
  //is not signed in through firebase auth.
  getUser(): boolean {
    if(localStorage.getItem('user')){
      this.tempUser = JSON.parse(localStorage.getItem("user"));
      this.email = this.tempUser.email;
      console.log(this.email);
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

  //fetch role from firebase
  async getRole() {

    if(this.getUser() == true || this.email != null){
      let userRef = this.firestore.collection('users', ref => ref.where('email', '==', this.email));
      let query = userRef.valueChanges();
      query.pipe(map(arr => arr[0])).subscribe(value => {
        try {
          this.role = value['role'];



        } catch (e) {
        }
      });
      console.log("The role being set is: " + this.role);
    }
    // let userRef = this.firestore.collection('users', ref => ref.where('email', '==', this.email));
    // let query = userRef.valueChanges();
    // query.pipe(map(arr => arr[0])).subscribe(value => {
    //   try {
    //     this.role = value['role'];
    //
    //
    //
    //   } catch (e) {
    //   }
    // });
    // console.log("The role being set is: " + this.role);
  }

  //method called by components to invoke role guard
  async setRole(): Promise<void>{


    this.getRole();
    await this.delay(10);
    console.log(this.role);
  }

  // async setRole2(): Promise<void>{
  //
  //
  //   this.getRole();
  //   await this.delay(10);
  //   console.log(this.role);
  // }



  //used to store status of logged in user (invokes logged in guard)
  isLoggedIn(): boolean {
    if(this.user!=false){
      console.log(this.user)
      return true;
    }else{
      console.log(this.user)
      return false;
    }
  }


  forgotPassword(email : string) {
    this.fireAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/']);
    }, err => {
      alert('Something went wrong');
    })
}



  async changePassword(password : string){
    await this.fireAuth.currentUser.then(u => u.updatePassword(password))
    this.reAuth(password);


  }

  async reAuth(password:string){
    try {

        await this.fireAuth.signInWithEmailAndPassword(this.email, password).then(res=>{
          localStorage.setItem('user', JSON.stringify(res.user));
        })
        this.tempUser = JSON.parse(localStorage.getItem("user"));
        this.email = this.tempUser.email;
        console.log("the email signing in is: "+ this.email);
        // localStorage.setItem('user', JSON.stringify(user));
        await this.delay(100);
        this.user=true;
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }



  }



  private delay(ms: number)
  {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

 // **IMPLEMENTATION FALL**
 //  async deleteUser() {
 //    // 1. using auth
 //    (await this.auth.currentUser).delete();
 //    // 2. using firebase
 //    firebase.auth().currentUser.delete()
 //   // 3. if import is like import * as firebase from 'firebase/app';
 //   firebase.default.auth().currentUser.delete()
 // }




  // **ARCHIVED**
  // async signInVolunteer(email: string, password: string) {
  //   try {
  //       // if (!email || !password) throw new Error('Invalid email and/or password');
  //       await this.fireAuth.signInWithEmailAndPassword(email, password);
  //       this.router.navigate(['/volunteermenu']);
  //       this.user=true;
  //       return true;
  //   } catch (error) {
  //       console.log('Sign in failed', error);
  //       return false;
  //   }
  // }


}
