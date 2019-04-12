import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationComponent } from './layouts/application/application.component';

const routes: Routes = [
  // Default Layout
  {
    path: '',
    component: DefaultComponent,
    pathMatch: 'full',
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  // App Layout
  {
    path: '',
    component: ApplicationComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'apps', loadChildren: './pages/apps/apps.module#AppsModule' },
      { path: 'hosts', loadChildren: './pages/hosts/hosts.module#HostsModule' },
      { path: 'firewalls', loadChildren: './pages/firewall/firewall.module#FirewallModule' },
      { path: 'manage', loadChildren: './pages/manage/manage.module#ManageModule' },
      { path: 'monitoring', loadChildren: './pages/monitoring/monitoring.module#MonitoringModule' },
      { path: 'tools', loadChildren: './pages/tools/tools.module#ToolsModule' },
      { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
