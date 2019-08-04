import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


export const ProjectsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: ListComponent,
      },
      {
        path: 'view',
        component: ViewComponent
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
    RouterModule.forChild(ProjectsRoutes)
  ],
  declarations: [ListComponent, CreateComponent, EditComponent, ViewComponent]
})
export class ProjectsModule { }
