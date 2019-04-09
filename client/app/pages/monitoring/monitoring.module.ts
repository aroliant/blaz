import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HealthComponent } from './health/health.component';


export const MonitoringRoutes: Routes = [
  {
    path: 'health',
    component: HealthComponent  
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MonitoringRoutes)
  ],
  declarations: [HealthComponent]
})
export class MonitoringModule { }
