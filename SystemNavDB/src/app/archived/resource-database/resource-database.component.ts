import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { RdbresourceService} from '../services/rdbresource.service';

import { rdbresource } from '../models/rdbresource';
import {Location} from '@angular/common';




@Component({
  selector: 'app-resource-database',
  templateUrl: './resource-database.component.html',
  styleUrls: ['./resource-database.component.css']
})
export class ResourceDatabaseComponent implements OnInit {
  rdbresources: rdbresource[];

  constructor(private rdbresourceService: RdbresourceService) { }


  async ngOnInit(){
    this.rdbresourceService.getRdbresources().subscribe(rdbresources => {
      this.rdbresources = rdbresources;
    });
  }

}
