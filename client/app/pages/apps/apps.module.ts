import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { AppService } from 'client/app/services/app.service';


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
      },
      {
        path: ':appId',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes)
  ],
  declarations: [ListComponent, CreateComponent, DetailComponent],
  providers: [
    AppService
  ]
})
export class AppsModule { }
