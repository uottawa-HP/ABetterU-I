import { AfterViewInit, Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfigService } from '../services/config.service';
import { map } from 'rxjs/operators';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
// import { rdbresource } from '../models/rdbresource';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  jsonResources = [];
  resources = [[]];
  title = 'home';
  loading = false;
  flag=false;
  // modifiedDate = [];





  constructor(private router: Router, private AuthService: AuthenticationService, private c: ConfigService) {


  }

  ngOnInit(): void {
    this.c.getData().subscribe(data => {
      this.jsonResources = data["rows"];
      console.warn(this.jsonResources);
      this.storeData()
    });

  
  }

  save(): void {
    this.loading=true;
    this.storeData()
  }


  setFlag():void{
    if (this.flag==true){
      this.storeData();
    }
  }

  storeData(): void{
    let page_size = 20;
    for (let i = 0; i < this.jsonResources.length; i++){
      let temp = [];
      let modDate = this.jsonResources[i].modifiedAt;;
      for (let j = 0; j < this.jsonResources[0]["cells"].length; j++){
        temp[j] = this.jsonResources[i]["cells"][j].value;
      }
      temp[this.jsonResources[0]["cells"].length + 1] = modDate

      if(!this.resources[Math.floor(i/page_size)]) {
        this.resources.push([temp])
      } else {
        this.resources[ Math.floor(i/page_size)].push(temp)
      }
    }
    this.loading=false;
    console.log(this.resources);
  }

  //**ARCHIVED**
  // storeModData(): void{
  //
  //   for (let i = 0; i < this.jsonResources.length; i++){
  //     let temp = [];
  //
  //     temp[i] = this.jsonResources[i].modifiedAt;
  //     console.log(temp);
  //
  //     this.modifiedDate[i] = temp;
  //   }
  //
  // }



  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  }



}
