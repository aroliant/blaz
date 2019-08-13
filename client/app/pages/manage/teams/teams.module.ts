import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { TeamsService } from 'client/app/services/teams.service';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UsersService } from 'client/app/services/users.service';


export const TeamsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TeamListComponent,
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: ':teamID',
        component: EditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TeamsRoutes),
    NgSelectModule
  ],
  declarations: [TeamListComponent, CreateComponent, EditComponent],
  providers: [
    TeamsService,
    UsersService,
  ]
})
export class TeamsModule { }
