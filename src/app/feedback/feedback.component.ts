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
  fbFormModel = new fbForm(this.resourceID, this.feedback);
  fbForm: any;



  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.fbFormModel = {id:this.resourceID, description:this.feedback};
      var row = [
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

      this.fbForm =
      {
        sheetId: 3439555094308740,
        body: row
      }








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
