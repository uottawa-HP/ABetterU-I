import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfigService } from '../config.service';
import { rdbresource } from '../models/rdbresource';
import { map } from 'rxjs/operators';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  jsonResources = [];
  resources = [];
  modifiedDate = [];





  constructor(private router: Router, private AuthService: AuthenticationService, private c: ConfigService) {

  }

  ngOnInit(): void {
    this.c.getData().subscribe(data => {
      this.jsonResources = data["rows"];
      console.warn(this.jsonResources);
      // console.warn(data);
    });
    this.storeData();
    // console.log("hello");
    // console.log(this.resources);
    //comment

  }

  storeData(): void{


    for (let i = 0; i < this.jsonResources.length; i++){
      let temp = [];
      let modDate = this.jsonResources[i].modifiedAt;;

      // console.log("hello");
      for (let j = 0; j < this.jsonResources[0]["cells"].length; j++){

        temp[j] = this.jsonResources[i]["cells"][j].value;


      }
      temp[this.jsonResources[0]["cells"].length + 1] = modDate
      // console.log(temp[-1]);
      this.resources[i] = temp;
    }
  }

  storeModData(): void{

    for (let i = 0; i < this.jsonResources.length; i++){
      let temp = [];
      // console.log("hello");

      temp[i] = this.jsonResources[i].modifiedAt;
      console.log(temp);

      this.modifiedDate[i] = temp;
    }

  }







  // async refresh(): Promise<void> {
  //   this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
  //   this.router.navigate(['/home']);
  //   });
  // }

  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  }



}
