import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }

  public showMyMessage=false 

  showFeedbackMessage() {
    setTimeout(() =>  {
      this.showMyMessage = true}, 1000)
    setTimeout(() =>  {
      this.showMyMessage = false}, 7000)
    }
  
 
}

