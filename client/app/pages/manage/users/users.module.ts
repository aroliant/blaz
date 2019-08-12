import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './list/list.component';
import { UserCreateComponent } from './create/create.component';
import { UserEditComponent } from './edit/edit.component';
import { UsersService } from 'client/app/services/users.service';
import { FormsModule } from '@angular/forms';


export const UsersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: ':id',
        component: UserEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UsersRoutes)
  ],
  declarations: [UserListComponent, UserCreateComponent, UserEditComponent],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
