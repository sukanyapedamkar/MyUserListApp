import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  title = "Add User";
  states = ['NY', 'NJ', 'IL', 'VA', 'TN'];
  user = {
    firstName : null,
    lastName : null,
    email:null,
    address:{
      city :null,
      state:null
    },
    company:{
      name:null
    }
  };
  
  constructor(private userService: UserService) { }


OnInit{
   
       
}

    
  }

 
