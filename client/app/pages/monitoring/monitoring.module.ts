import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HealthComponent } from './health/health.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AuditsComponent } from './audits/audits.component';


export const MonitoringRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "health",
        component: HealthComponent,
      },
      {
        path: 'alerts',
        component: AlertsComponent
      },
      {
        path: 'audits',
        component: AuditsComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MonitoringRoutes)
  ],
  declarations: [HealthComponent, AlertsComponent, AuditsComponent]
})
export class MonitoringModule { }
