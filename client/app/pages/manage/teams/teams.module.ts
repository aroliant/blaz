import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


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
        path: 'edit',
        component: EditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TeamsRoutes)
  ],
  declarations: [TeamListComponent, CreateComponent, EditComponent]
})
export class TeamsModule { }
