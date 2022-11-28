import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { fbForm } from '../models/fbForm';
import { HomeComponent } from '../home/home.component';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';







@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})



export class FeedbackComponent implements OnInit {

  resourceID = "";
  feedbackType = "";
  feedback = "";
  errorMsg = '';
  fbForm: any;
  fbFormModel = new fbForm(3439555094308740, {});
  public showMyMessage=false;
  idNum: any;
  preselected: any;
  disabled: any;
  success: boolean;
  message= "";

  @Input() home: HomeComponent;
  @ViewChild('myForm', {static: false}) myForm: NgForm;



  constructor(public feedbackService: FeedbackService,private router: Router) {
    this.idNum= feedbackService.idNumber;
    this.preselected = feedbackService.preselected;
    this.feedbackType= this.preselected;



  }



  ngOnInit(): void {
    if(this.feedbackService.preselected == "" || this.feedbackService.preselected == undefined || this.feedbackService.preselected == null ){
      this.feedbackType = "Choose";
    }
    else{
      this.idNum= this.feedbackService.idNumber;
      this.preselected = this.feedbackService.preselected;
      this.feedbackType= this.preselected;
    }


  }



  selectChangeHandler(event:any){
    this.feedbackType = event.target.value;
    if(this.feedbackType == "Suggestion"){
      this.disabled = true;
      this.resourceID = "";
      this.idNum = "N/A";
    }
    if(this.feedbackType == "Feedback"){
      this.disabled = false;
      this.idNum = "";
    }
    // else{
    //   this.disabled = false;
    // }

    console.log("feedbackType",this.feedbackType);
  }

  onSubmit() {
    if(this.feedbackType == "Suggestion"){
      this.preselected = "Suggestion";
      this.idNum = "N/A";
    }

    else if(this.feedbackType == "Feedback"){
      this.preselected = "Feedback";
    }


    this.fbForm = [
                {
                  "toBottom": true,
                  "cells": [
                    {
                      "columnId": 82722297276292,
                      "value": this.preselected
                    },
                    {
                      "columnId": 4586321924646788,
                      "value": this.idNum,
                      "strict": false
                    },
                    {
                      "columnId": 2334522110961540,
                      "value": this.feedback,
                      "strict": false
                    }
                  ]
                }
              ];

      this.fbFormModel = {sheetId:3439555094308740, body:this.fbForm};
      console.log(this.fbFormModel);

      if(this.preselected == "Choose"||(this.preselected == "" || this.preselected == undefined || this.preselected == null) || (this.feedback == "" || this.feedback == undefined || this.feedback == null)|| (this.preselected == "Feedback" && (this.idNum == "" || this.idNum == null || this.idNum == undefined)))
      {
        this.message = "One or more of the form fields is invalid";
        this.success = false;
        this.preselected = "";

      }else{
        this.feedbackService.enroll(this.fbFormModel)
          .subscribe(
            response => console.log('Success!', response),
            error => this.errorMsg = error.statusText
          )
        this.preselected = "";
        this.idNum ="";
        this.success = true;
        this.feedbackType = "Choose";
        this.feedback = "";
        // this.myForm.resetForm();

      }

      // setTimeout(() =>  {
      //   this.showMyMessage = true}, 1000)
      // setTimeout(() =>  {
      //   this.showMyMessage = false}, 7000)





    }

  //**IMPLEMENTATION FALL**

}
