import { Component, OnInit } from '@angular/core';
import { UsersService } from 'client/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {

  users : []

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((res:any)=>{
      if(res.success){
        this.users = res.users;
      }
    })
  }

}
