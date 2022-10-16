import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { staffMember } from '../models/staffMember';
import { NgForm } from '@angular/forms';
// import { database, User } from 'firebase';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';




@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css']
})
export class StaffMemberComponent implements OnInit {
  users: staffMember[];
  editState: boolean = false;
  editMode: boolean = false;
  editUserId: string;
  userToEdit: staffMember;
  password = '';
  message: string;
  success: boolean;

  @ViewChild('userForm') userForm:NgForm; //CRUD
  url = 'https://console.firebase.google.com/project/system-navigation-database/firestore/data/users.json'
  user: staffMember = {
    id: '',
    firstname: '',
    lastname:'',
    email: '',
    role:''
  }


  constructor(private userService: UsersService, private http: HttpClient, private signUpService: AuthenticationService) {

  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users
    });
  }

  deleteUser(event, user: staffMember){
    if(confirm('Do you want to delete this user')){
      //this.clearState();
      this.userService.deleteUser(user);
    }
  }

  onEditUser(user: staffMember, index){
    this.editMode = true;
    console.log(this.user.id);
    this.editUserId = user.id;


    this.userForm.setValue({
    firstname: this.users[index].firstname,
    lastname:this.users[index].lastname,
    email: this.users[index].email,
    role: this.users[index].role
    })
  }

  editUser( event ,user: staffMember){
    this.editState = true;
    this.userToEdit = user;
  }

  clearState(){
    this.editState = false;
    this.userToEdit = null;
  }

  updateUser(user: staffMember){
    this.userService.updateUser(user);
    this.clearState();

  }

  async onAddUser(userData: staffMember): Promise<boolean>{
    this.message = '';
    if(this.user.firstname != '' && this.user.lastname != '' && this.user.email != '' && this.user.role != '' && this.password != ''){
      if(await this.signUpService.signUp(this.user.email, this.password) == false){
        this.message = "Email is invalid or is currently in use in the system!";
        this.success = false;
        return false;
      }else{
        this.userService.addUser(this.user);
        this.user.firstname = '',
        this.user.lastname = '',
        this.user.email = '',
        this.user.role = ''
        this.password ='';
        this.success = true;
        return(await this.signUpService.signUp(this.user.email, this.password));
      }

    }else{
      this.success = false;
      this.message = 'Registration Invalid! One or more fields are missing!'
    }

  }

}
