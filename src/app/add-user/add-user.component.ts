import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { staffMember } from '../models/staffMember';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  

}
