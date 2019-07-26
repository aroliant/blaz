import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from 'client/app/services/app.service';
import { FormsModule } from '@angular/forms';


import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';

import { HttpSettingsComponent } from './detail/components/http-settings/http-settings.component';
import { OverviewComponent } from './detail/components/overview/overview.component';
import { AppConfigurationComponent } from './detail/components/app-configuration/app-configuration.component';
import { DeploymentComponent } from './detail/components/deployment/deployment.component';
import { ActivityComponent } from './detail/components/activity/activity.component';
import { AccessComponent } from './detail/components/access/access.component';


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
        path: ':appID',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes),
    FormsModule,
  ],
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent,
    HttpSettingsComponent,
    OverviewComponent,
    AppConfigurationComponent,
    DeploymentComponent,
    ActivityComponent,
    AccessComponent,
  ],
  providers: [
    AppService
  ]
})
export class AppsModule { }
