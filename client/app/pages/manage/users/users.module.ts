import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './list/list.component';
import { UserCreateComponent } from './create/create.component';
import { UserEditComponent } from './edit/edit.component';


export const UsersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: UserListComponent,
      },
      {
        path: 'create',
        component: UserCreateComponent
      },
      {
        path: 'edit',
        component: UserEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes)
  ],
  declarations: [UserListComponent, UserCreateComponent, UserEditComponent]
})
export class UsersModule { }
