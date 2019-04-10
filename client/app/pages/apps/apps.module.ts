import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';


export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: ListComponent,
      },
      {
        path: 'create',
        component: CreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes)
  ],
  declarations: [ListComponent, CreateComponent]
})
export class AppsModule { }
