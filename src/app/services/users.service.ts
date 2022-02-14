import { Injectable } from '@angular/core';
import {staffMember} from '../models/staffMember'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
 



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollection: AngularFirestoreCollection<staffMember>;
  users : Observable<staffMember[]>;

  constructor(public firestore: AngularFirestore) {
    this.users = this.firestore.collection('users').valueChanges();
   }

   getUsers(){
     return this.users;
   }
}


