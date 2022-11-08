import { AfterViewInit, Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfigService } from '../services/config.service';
import { map } from 'rxjs/operators';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms'
import { staffMember } from '../models/staffMember';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  jsonResources = [];
  columnResources = [];
  resources = [];
  test={};
  temp2 = [];
  columns = {};
  title = 'home';
  loading = false;
  flag=false;
  pageSize = 25;
  page = 1;
  noOfPages = 0;
  healthTheme= [];
  subtopic= [];
  category= [];
  language= [];

  public searchFilter: any = '';
  public listSearch : any = '';
  public english : any = '';
  query: String ="";
  isChecked: String = "";
  isEnglish: String = "";

  // Favorite
  favorite = false;

  constructor(private router: Router, private AuthService: AuthenticationService, private c: ConfigService, 
    ) {


  }

  ngOnInit(): void {
    this.c.getData().subscribe(data => {
      this.jsonResources = data["rows"];
      this.columnResources = data ["columns"];
      console.warn(this.jsonResources);
    });


    this.storeData()

    

  }

  storeData(): void{
    console.log(this.flag);


    for (let i = 0; i < this.jsonResources.length; i++){
      let temp = [];
      let modDate = this.jsonResources[i].modifiedAt;;

      // console.log("hello");
      for (let j = 0; j < this.jsonResources[0]["cells"].length; j++){
        if(this.jsonResources[i]["cells"][4].value != null){
          temp[j] = this.jsonResources[i]["cells"][j].value;
        }




      }

     
        
      temp[this.jsonResources[0]["cells"].length + 1] = modDate
      // console.log(temp[-1]);
      this.resources[i] = temp;

    }

    for (let i=0; i< this.columnResources.length; i++){
      if(this.columnResources[i]['title']=="Health Topic"){
        this.columns['Health Topic']= this.columnResources[i]['id'];
      }
      else if(this.columnResources[i]['title']=="Subtopic"){
        this.columns["Subtopic"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Tags"){
        this.columns["Tags"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Language"){
        this.columns["Language"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Name of Resource"){
        this.columns["Name of Resource"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Description of resource"){
        this.columns["Description of resource"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Web link (if applicable)"){
        this.columns["Web link (if applicable)"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Additional information"){
        this.columns["Additional information"]= this.columnResources[i]['id'];

      }
      

    }

    for (let i = 0; i < this.jsonResources.length; i++){
     

      // console.log("hello");
      for (let j = 0; j < this.jsonResources[i]["cells"].length; j++){
        for (var key in this.columns){
          
          if (this.jsonResources[i]["cells"][j]['columnId']==this.columns[key]){

            if (this.jsonResources[i]["cells"][j].value != undefined){
            this.test[key]=this.jsonResources[i]["cells"][j].value;}
            
            
          }
          

        }
     
      }
      this.temp2.push(this.test);
      console.log(this.temp2)
      this.test={};
        
    }

    console.log("TEST", this.test)

    

    this.noOfPages = Math.floor(this.resources.length/25);
    console.log(this.noOfPages);

    this.removeBlanks(this.resources);


    console.log(this.healthTheme);
    console.log(this.resources);
    console.log(this.columns)
    this.loading=false;
    console.log("done");
    console.log("test des ressources",this.resources["Health Topic"]);


  }


  removeBlanks(someArr){
    var length = this.resources.length;
    var indexStore=[];


    for (let k = 0; k<length; k++){
      this.resources[k].push(k+1);
      if (this.resources[k][0] == null && this.resources[k][1] == null){
        console.log(this.resources[k]);
        indexStore.push(k)
      }
    }


    for (var l = indexStore.length -1; l >= 0; l--){
      this.resources.splice(indexStore[l],1);
    }
  }


  async logout(): Promise<boolean> {
    return await this.AuthService.logout();

  
  }

  checkValue(event: any){
    console.log(event);
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

  // save(): void {
  //
  //   this.loading=true;
  //   this.storeData()
  //
  // }
  //
  //
  // setFlag():void{
  //   if (this.flag==true){
  //     this.storeData();
  //   }
  // }

  /*isFavoriteFunction(user: staffMember){
    this.favorite = true;
    user.favorite.push('ressource');//access de data form the spredsheet
  }*/

}
