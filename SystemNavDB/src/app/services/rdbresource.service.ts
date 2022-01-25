import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {rdbresource} from '../models/rdbresource';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class RdbresourceService {
  rdbresourcesCollection: AngularFirestoreCollection<rdbresource>;
  rdbresources: Observable<rdbresource[]>

  constructor(public firestore: AngularFirestore) {
    this.rdbresources = this.firestore.collection('resourcedb').valueChanges();
  }

  getRdbresources(){
    return this.rdbresources;
  }

}
