import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from 'client/app/services/app.service';
import { FormsModule } from '@angular/forms';


import { AppsListComponent } from './list/list.component';
import { CreateAppComponent } from './create/create.component';
import { AppDetailComponent } from './detail/detail.component';

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
        path: '',
        component: AppsListComponent,
      },
      {
        path: 'create',
        component: CreateAppComponent
      },
      {
        path: ':appID',
        component: AppDetailComponent
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
    AppsListComponent,
    CreateAppComponent,
    AppDetailComponent,
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
