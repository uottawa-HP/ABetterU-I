import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { fbForm } from '../models/fbForm';






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




  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  selectChangeHandler(event:any){
    this.feedbackType = event.target.value;
  }

  onSubmit() {
    this.fbForm = [
                {
                  "toBottom": true,
                  "cells": [
                    {
                      "columnId": 82722297276292,
                      "value": this.feedbackType
                    },
                    {
                      "columnId": 4586321924646788,
                      "value": this.resourceID,
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

    }

  //**IMPLEMENTATION FALL**

}
