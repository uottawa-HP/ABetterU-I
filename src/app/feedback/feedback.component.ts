import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { fbForm } from '../models/fbForm';
import { HomeComponent } from '../home/home.component';
import { NgForm } from '@angular/forms';







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

  @Input() home: HomeComponent;
  @ViewChild('myForm', {static: false}) myForm: NgForm;



  constructor(public feedbackService: FeedbackService) {
    this.idNum= feedbackService.idNumber;
    this.preselected = feedbackService.preselected;

  }



  ngOnInit(): void {



  }



  selectChangeHandler(event:any){
    this.feedbackType = event.target.value;
    if(this.feedbackType == "Suggestion"){
      this.disabled = true;
      this.resourceID = "";
    }
    if(this.feedbackType == "Feedback"){
      this.disabled = false;
    }
    // else{
    //   this.disabled = false;
    // }

    console.log("feedbackType",this.feedbackType);
  }

  onSubmit() {
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

      setTimeout(() =>  {
        this.showMyMessage = true}, 1000)
      setTimeout(() =>  {
        this.showMyMessage = false}, 7000)


      this.feedbackService.enroll(this.fbFormModel)
        .subscribe(
          response => console.log('Success!', response),
          error => this.errorMsg = error.statusText
        )
      this.preselected="";
      this.myForm.resetForm();


    }

  //**IMPLEMENTATION FALL**

}
