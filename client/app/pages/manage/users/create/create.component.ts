import { Component, OnInit } from '@angular/core';
import { UsersService } from 'client/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class UserCreateComponent implements OnInit {

  user = {
    username: "",
    userEmail: "",
    password: ""
  }

  constructor(private usersService: UsersService,private router: Router) { }

  ngOnInit() {
  }

  createUser(){
    console.log(this.user);
    this.usersService.createUser(this.user).subscribe((res:any)=>{
      if(res.success){
        alert("User Created");
        this.router.navigate(["/users"]);
      }
    })
  }

}
