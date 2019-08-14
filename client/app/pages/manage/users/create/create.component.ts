import { Component, OnInit } from '@angular/core';
import { UsersService } from 'client/app/services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class UserCreateComponent implements OnInit {

  user = {
    username: '',
    userEmail: '',
    password: ''
  };

  constructor(private usersService: UsersService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  createUser() {
    console.log(this.user);
    this.usersService.createUser(this.user).subscribe((res: any) => {
      if (res.success) {
        this.toastr.success('User Created', 'Success!');
        this.router.navigate(['/users']);
      }
    });
  }

}
