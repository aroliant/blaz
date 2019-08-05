import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './list/list.component';
import { ProjectCreateComponent } from './create/create.component';
import { ProjectEditComponent } from './edit/edit.component';
import { ProjectViewComponent } from './view/view.component';


export const ProjectsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: ProjectListComponent,
      },
      {
        path: 'view',
        component: ProjectViewComponent
      },
      {
        path: 'create',
        component: ProjectCreateComponent
      },
      {
        path: 'edit',
        component: ProjectEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRoutes)
  ],
  declarations: [ProjectListComponent, ProjectCreateComponent, ProjectEditComponent, ProjectViewComponent]
})
export class ProjectsModule { }
