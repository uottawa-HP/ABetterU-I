import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {noop} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl: string;
  user: boolean = false;

  constructor(private router: Router, private firestore: AngularFirestore, private fireAuth: AngularFireAuth) {}


  // login(email: string, password: string): boolean {
  //
  //   if (user === "admin" && password === "pass") {
  //     console.log("helloworld")
  //     sessionStorage.setItem('username', user);
  //     if (this.redirectUrl) { this.router.navigate([this.redirectUrl]).then(noop); }
  //     this.redirectUrl = null;
  //     return true;
  //   }
  //   return false;
  // }


  async signIn(email: string, password: string) {
    try {
        // if (!email || !password) throw new Error('Invalid email and/or password');
        await this.fireAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/menu']);
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

  async signInDoctor(email: string, password: string) {
    try {
        // if (!email || !password) throw new Error('Invalid email and/or password');
        await this.fireAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/doctormenu']);
        this.user=true;
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
  }

  async signInMedStaff(email: string, password: string) {
    try {
        // if (!email || !password) throw new Error('Invalid email and/or password');
        await this.fireAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/medstaffmenu']);
        this.user=true;
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
  }

  async signInStaff(email: string, password: string) {
    try {
        // if (!email || !password) throw new Error('Invalid email and/or password');
        await this.fireAuth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['/staffmenu']);
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




  // logout(){
  //   // sessionStorage.removeItem('username');
  //   // this.fireAuth.signOut().then(() => {
  //   //   this.router.navigate(['/']);
  //   // });
  //   // if(this.fireAuth.signOut()){
  //   //   return true;
  //   // }
  //   this.fireAuth.signOut();
  //   this.router.navigate(['/']);
  // }


  async logout(){
    try{
      await this.fireAuth.signOut();
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

  // getUser(): any {
  //   return this.fireAuth.currentUser;
  // }
  //
  isLoggedIn(): boolean {
    if(this.user!=false){
      console.log(this.user)
      return true;
    }else{
      // console.log(this.user)
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
