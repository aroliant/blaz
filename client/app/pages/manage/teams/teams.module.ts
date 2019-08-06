import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { TeamsService } from 'client/app/services/teams.service';
import { FormsModule } from '@angular/forms';


export const TeamsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: TeamListComponent,
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TeamsRoutes)
  ],
  declarations: [TeamListComponent, CreateComponent, EditComponent],
  providers: [
    TeamsService
  ]
})
export class TeamsModule { }
