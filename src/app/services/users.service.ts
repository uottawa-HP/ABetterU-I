import { Injectable } from '@angular/core';
import {staffMember} from '../models/staffMember'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


 



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersCollection: AngularFirestoreCollection<staffMember>;
  users : Observable<staffMember[]>;
  userDoc: AngularFirestoreDocument<staffMember>;
  updateUrl: string;
  

  constructor(public firestore: AngularFirestore, private http: HttpClient) {
    //this.users = this.firestore.collection('users').valueChanges();
    //ref => ref.orderBy('firstname','asc')
    this.usersCollection = this.firestore.collection('users' );
   


    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
      const data = a.payload.doc.data() as staffMember;
      data.id = a.payload.doc.id;
      return data;
      })
    }));
   }

    getUsers(){
     return this.users;
    }

    addUser(user:staffMember){
      this.usersCollection.add(user);
    }

   deleteUser(user:staffMember){
    this.userDoc = this.firestore.doc(`users/${user.id}`);
    this.userDoc.delete();
   }

   

   updateUser(user:staffMember){
    this.userDoc = this.firestore.doc(`users/${user.id}`);
    this.userDoc.update(user);
   }

   /*updateUser(user:staffMember):Observable <staffMember>{
    return this.http.put<staffMember>(this.updateUrl,user);
  }*/
  


}


