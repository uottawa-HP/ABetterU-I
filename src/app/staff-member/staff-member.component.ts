import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'; 
import { staffMember } from '../models/staffMember';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css']
})
export class StaffMemberComponent implements OnInit {
  users: staffMember[];
  editState: boolean = false;
  userToEdit: staffMember;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      //console.log(users);
      this.users = users

    });   
  }

  deleteUser(event, user){
      this.userService.deleteUser(user);
  }

  editUtem(event,user){
    this.editState = true;
    this.userToEdit = user;
  }

}
