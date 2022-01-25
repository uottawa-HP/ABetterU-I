import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { RdbresourceService} from '../services/rdbresource.service';
import { rdbresource } from '../models/rdbresource';

@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.css']
})
export class ResourceSearchComponent implements OnInit {
  rdbresources: rdbresource[];
  constructor(private rdbresourceService: RdbresourceService) { }

  async ngOnInit(){
    this.rdbresourceService.getRdbresources().subscribe(rdbresources => {
      this.rdbresources = rdbresources;
    });
  }

}
