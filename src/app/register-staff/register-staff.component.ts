import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.css']
})
export class RegisterStaffComponent implements OnInit {
  firstname = '';
  lastname = '';
  
  id: number;
  patientRegistered: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
