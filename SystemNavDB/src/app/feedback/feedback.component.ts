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


  //Displays a confirmation message once the user clicks on the submit button
  public showMyMessage=false

  showFeedbackMessage() {
   
    setTimeout(() =>  {
      //once the user clicks on the submit button, after 1 sec, the message will appear
      this.showMyMessage = true}, 1000)
       //the message displays for 7 seconds and then disappears again
    setTimeout(() =>  {
      this.showMyMessage = false}, 7000)
    }


  //**IMPLEMENTATION FALL**

}
