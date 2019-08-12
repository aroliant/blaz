import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectListComponent } from './list/list.component';
import { ProjectCreateComponent } from './create/create.component';
import { ProjectEditComponent } from './edit/edit.component';
import { ProjectViewComponent } from './view/view.component';

import { ProjectsService } from './../../services/projects.service';


export const ProjectsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: ProjectListComponent,
      },
      {
        path: ':id',
        component: ProjectViewComponent
      },
      {
        path: 'create',
        component: ProjectCreateComponent
      },
      {
        path: 'edit/:id',
        component: ProjectEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ProjectsRoutes)
  ],
  declarations: [ProjectListComponent, ProjectCreateComponent, ProjectEditComponent, ProjectViewComponent],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
