import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { RdbresourceService} from '../services/rdbresource.service';
import { rdbresource } from '../models/rdbresource';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Location} from '@angular/common';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.css']
})
export class ResourceSearchComponent implements OnInit {
  // rdbresources: rdbresource[];
  // constructor(private rdbresourceService: RdbresourceService) { }

  // ngOnInit(){
  //   this.rdbresourceService.getRdbresources().subscribe(rdbresources => {
  //     this.rdbresources = rdbresources;
  //   });
  // }

  Tag: string;
  rdbresources: rdbresource[];
  rdbResourceFound: boolean;
  healthTheme: string;


  AdditionalInformation = '';
  Category = '';
  DescriptionOfResource = '';
  HealthTheme = '';
  Language = '';
  NameOfResource = '';
  Subtopic = '';
  WebLink= '';




  getRdbResource() {
    //reset patientFound and Update flags
    this.rdbResourceFound = null;


    //Ethan comment --> to add iff statments for certain combinations of queries


    let patientReference = this.firestore.collection('resourcedb', ref => ref.where('Tag', 'array-contains', this.Tag));


    // let patientReference = this.firestore.collection('resourcedb', ref => ref.where('Tag', 'array-contains', this.Tag).where('HealthTheme', '==', this.healthTheme).where(cagtegory == web));



    let query = patientReference.valueChanges();
    //query.subscribe(value => console.log(value));
    query.subscribe(rdbresources => {
      this.rdbresources = rdbresources;
    });
    // subscribe(value => {
      // try {
      //   this.AdditionalInformation = value['AdditionalInformation'];
      //   this.Category = value['Category'];
      //   this.DescriptionOfResource = value['DescriptionOfResource'];
      //   this.HealthTheme = value['HealthTheme'];
      //   this.Language = value['Language'];
      //   this.NameOfResource = value['NameOfResource'];
      //   this.Subtopic = value['Subtopic'];
      //   this.Tag = value['Tag'];
      //   this.WebLink = value['WebLink'];
      //
      // } catch (e) {
      //   this.rdbResourceFound = false;
      // }
    // })

    // if (this.rdbResourceFound == false) {
    //   return;
    // }
    // this.rdbResourceFound = true;
  }

  constructor(private firestore: AngularFirestore, private _location: Location) { }


  ngOnInit(): void {
  }

}
