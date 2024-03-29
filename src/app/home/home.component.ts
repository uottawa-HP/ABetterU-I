

import { AfterViewInit, Component, Input, OnInit, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';
import { ConfigService } from '../services/config.service';
import { map } from 'rxjs/operators';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { FeedbackComponent } from '../feedback/feedback.component';
import { FeedbackService } from '../services/feedback.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';





// import { rdbresource } from '../models/rdbresource';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit{


  jsonResources = [];
  columnResources = [];
  resources = [];
  test={};
  filteredResources = [];
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
  ob = {};
  arr: any;





  public searchFilter: any = '';
  public checkboxFilter: any = '';
  public listSearch : any = '';
  public english : any = '';
  public sexualHealthFilter: any ='';
  public mentalHealthFilter: any='';
  public physicalHealthFilter: any='';
  public communityEngagementFilter: any='';
  public disabilityFilter: any='';
  public  internationalFilter: any='';
  public nutritionFilter: any="";
  public populationHealthFilter: any ="";
  public substanceUseHealthFilter: any="";
  public academicsFilter: any='';
  public englishFilter: any='';
  public  affiliationExternal: any='';
  public affiliation: any='';
  public id : any ='';
  public favourites: any='';
  query: String ="";
  isMulti: boolean = false;
  isBilingual: boolean = false;
  checked: boolean = false;
  isSexualHealth: boolean = false;
  isMentalHealth: boolean = false;
  isPhysicalHealth: boolean = false;
  isCommunityEngagement: boolean = false;
  isDisability: boolean = false;
  isInternational: boolean = false;
  isNutrition: boolean = false;
  isPopulation: boolean = false;
  isSubstance : boolean = false;
  isAcademics: boolean = false;
  isEnglish: boolean = false;
  isInternal: boolean = false;
  isExternal: boolean = false;
  isFavourite: String = "";
  public a: number =0;

  element = 0;
  public isCollapsed = true;
  public isChecked=false;
  active = 0;

  pages









@Input() feedback: FeedbackComponent;


  constructor(private router: Router, private AuthService: AuthenticationService, private c: ConfigService, public feebackServices: FeedbackService, private firestore: AngularFirestore) {

    this.pages = Array(5).fill(0).map((x, i) => i);
    this.pages.pop()

  }

  ngOnInit(): void {
    this.c.getData().subscribe(data => {
      this.jsonResources = data["rows"];
      this.columnResources = data ["columns"];
      console.warn(this.jsonResources);
      this.storeData()

    });

  }

  // checkFavourites(favourites): boolean{
  //   if(this.AuthService.favourites.some(favourites)){
  //     return true;
  //   }
  //   return false;
  // }


 updateFavourites(){

  this.firestore.collection('users').doc((this.AuthService.email)).set({
    favourites: this.AuthService.favourites,
    firstname: this.AuthService.firstname,
    lastname: this.AuthService.lastname,
    email: this.AuthService.email,
    role: this.AuthService.role
  });

  console.log("Updated favourites: "+ this.AuthService.favourites);
 }





  onChanged(resource) {
    this.isChecked=true;

    for (let i = 0; i < this.AuthService.favourites.length; i++){
      if(this.AuthService.favourites[i]==resource){
        delete this.AuthService.favourites[i];
        this.isChecked = false;
        this.AuthService.favourites = this.AuthService.favourites.filter((element): element is number => {

          return element !== null;
        });
        this.updateFavourites();
      }
    }
    if(this.isChecked==true){
      this.AuthService.favourites.push(resource);
      this.updateFavourites();
    }

    console.log(this.AuthService.favourites);


  }





  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
    uncheckAll() {
      this.checkboxes.forEach((element) => {
        element.nativeElement.checked = false;

      });
      this.isMulti=false;
      this.isBilingual = false;
      this.checked= false;
      this.isSexualHealth = false;
      this.isMentalHealth = false;
      this.isPhysicalHealth = false;
      this.isCommunityEngagement = false;
      this.isDisability= false;
      this.isInternational = false;
      this.isNutrition = false;
      this.isPopulation = false;
      this.isSubstance = false;
      this.isAcademics= false;
      this.isEnglish = false;
      this.isInternal = false;
      this.isExternal = false;
    }



  storeData(): void{
    console.log(this.flag);
    this.filteredResources = [];



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
        this.columns['HealthTopic']= this.columnResources[i]['id'];
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
        this.columns["NameofResource"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Description of resource"){
        this.columns["Descriptionofresource"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Tags"){
        this.columns["Tags"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Web link"){
        this.columns["Weblink(ifapplicable)"]= this.columnResources[i]['id'];

      }
      else if(this.columnResources[i]['title']=="Additional information"){
        this.columns["Additionalinformation"]= this.columnResources[i]['id'];

      }

      else if(this.columnResources[i]['title']=="Affiliation"){
        this.columns["Affiliation"]= this.columnResources[i]['id'];

      }


      console.log(this.columns);


    }

    for (let i = 0; i < this.jsonResources.length; i++){


      // console.log("hello");
      for (let j = 0; j < this.jsonResources[i]["cells"].length; j++){
        for (var key in this.columns){

          if (this.jsonResources[i]["cells"][j]['columnId']==this.columns[key]){

            if (this.jsonResources[i]["cells"][j].value != undefined && key != undefined ){
              this.test[key]=this.jsonResources[i]["cells"][j].value;
             }


          }
          this.test['id']=i+1;


        }

      }

      if (Object.keys(this.test).length !=1){
        this.filteredResources.push(this.test);
        console.log(this.filteredResources)
        this.test={};
      }



    }





    this.noOfPages = Math.floor(this.filteredResources.length/25);
    console.log(this.noOfPages);




    console.log(this.healthTheme);
    console.log(this.resources);
    console.log(this.columns)
    this.loading=false;
    console.log("done")


  }

  getPageNumbers(someArr){
  this.noOfPages = Math.floor(this.filteredResources.length/25);
  console.log(this.noOfPages);
  }


  get currentPage (){
    return this.active;
  }


  removeBlanks(someArr){
    var length = this.filteredResources.length;
    var indexStore=[];


    for (let k = 0; k<length; k++){
      this.filteredResources[k].push(k+1);
      if (this.filteredResources[k][0] == null && this.filteredResources[k][1] == null){
        console.log(this.filteredResources[k]);
        indexStore.push(k)
      }
    }


    for (var l = indexStore.length -1; l >= 0; l--){
      this.filteredResources.splice(indexStore[l],1);
    }
  }







  async logout(): Promise<boolean> {
    return await this.AuthService.logout();


  }

  checkValue(event: any){
    console.log(event);
 }

 show(element){
  this.feebackServices.idNumber= element;
  this.feebackServices.preselected="Feedback";

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



}
