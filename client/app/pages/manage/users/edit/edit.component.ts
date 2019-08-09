import { Component, OnInit } from '@angular/core';
import { UsersService } from 'client/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: {}

  constructor(private usersService: UsersService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.usersService.getUser(data.id).subscribe((res:any) => {
        if(res.success){
          this.user = res.user;
        }
      })
    })
  }

}
