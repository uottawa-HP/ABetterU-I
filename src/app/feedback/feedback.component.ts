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
  feedback = "";
  errorMsg = '';
  fbForm: any;
  fbFormModel = new fbForm(3439555094308740, {});




  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.fbForm = [
                {
                  "toBottom": true,
                  "cells": [
                    {
                      "columnId": 82722297276292,
                      "value": this.resourceID
                    },
                    {
                      "columnId": 4586321924646788,
                      "value": this.feedback,
                      "strict": false
                    }
                  ]
                }
              ];

      this.fbFormModel = {sheetId:3439555094308740, body:this.fbForm};
      console.log(this.fbFormModel);









      this.feedbackService.enroll(this.fbFormModel)
        .subscribe(
          response => console.log('Success!', response),
          error => this.errorMsg = error.statusText
        )
      // this.feedbackService.enrollGet()
      //   .subscribe(
      //     response => console.log('Success!', response),
      //     error => this.errorMsg = error.statusText
      //   );
    }








  // _url = 'http://localhost:3000/enroll';
  // showFeedbackMessage() {
  //   console.log(JSON.stringify({id:this.resourceID, description: this.feedback}));
  //   return this.http.post<any>(this._url, JSON.stringify({id:this.resourceID, description: this.feedback}));
  // }


  //**IMPLEMENTATION FALL**

}
