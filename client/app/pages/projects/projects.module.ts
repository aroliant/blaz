import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './list/list.component';
import { ProjectCreateComponent } from './create/create.component';
import { ProjectEditComponent } from './edit/edit.component';
import { ProjectViewComponent } from './view/view.component';

import { ProjectsService } from './../../services/projects.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToasterService } from 'client/app/components/toaster/toaster.service';
import { UsersService } from 'client/app/services/users.service';
import { TeamsService } from 'client/app/services/teams.service';


export const ProjectsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProjectListComponent,
      },
      {
        path: 'create',
        component: ProjectCreateComponent
      },
      {
        path: ':projectID',
        component: ProjectViewComponent
      },
      {
        path: 'edit/:projectID',
        component: ProjectEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule.forChild(ProjectsRoutes)
  ],
  declarations: [ProjectListComponent, ProjectCreateComponent, ProjectEditComponent, ProjectViewComponent],
  providers: [
    ProjectsService,
    ToasterService,
    UsersService,
    TeamsService,
  ]
})
export class ProjectsModule { }
