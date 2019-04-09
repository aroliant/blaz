import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ListComponent } from './list/list.component';


export const AppsRoutes: Routes = [
  {
    path: '',
    component: ListComponent  
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes)
  ],
  declarations: [ListComponent]
})
export class AppsModule { }
