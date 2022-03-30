import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service'; 
import { staffMember } from '../models/staffMember';
import { NgForm } from '@angular/forms';
import { database, User } from 'firebase';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';




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
  
  @ViewChild('userForm') userForm:NgForm; //CRUD
  url = 'https://console.firebase.google.com/project/system-navigation-database/firestore/data/users.json'
  user: staffMember = {
    id: '',
    firstname: '',
    lastname:'',
    email: '',
    role:''
  }


  constructor(private userService: UsersService, private http: HttpClient ) { 
    
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      //console.log(users);
      this.users = users
    });   
  }

  /*fetchUser(){
    this.http.get<staffMember>(this.url)
    .pipe(map(resData=>{
      console.log(resData);
      const userArray = [];
      for(const key in resData){
        console.log(...resData[key]);
        if(resData.hasOwnProperty(key)){
          userArray.push({id:key, ...resData[key]})
        } 
      }
      return userArray
    }))
    .subscribe(users=>{
      console.log(users)
      this.users = users;
    })
  }*/

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

  onAddUser(userData: staffMember){
    if(this.userForm.valid){       
        if(this.user.firstname != '' && this.user.lastname != '' && this.user.email != '' && this.user.role != ''){
          this.userService.addUser(this.user);
          this.user.firstname = '',
          this.user.lastname = '',
          this.user.email = '',
          this.user.role = ''
  
        }
    }
  }

}
