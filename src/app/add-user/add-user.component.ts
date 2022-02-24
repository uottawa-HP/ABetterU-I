import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { staffMember } from '../models/staffMember';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: staffMember = {
    id: '',
    firstName: '',
    lastName:'',
    email: '',
    role:''
  }

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.user.firstName != '' && this.user.lastName != '' && this.user.email != '' && this.user.role != ''){
      this.userService.addUser(this.user);
      this.user.firstName = '',
      this.user.lastName = '',
      this.user.email = '',
      this.user.role = ''
    }
  }

}
