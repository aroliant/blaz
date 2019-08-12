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
      { path: 'apps', loadChildren: () => import('./pages/apps/apps.module').then(m => m.AppsModule) },
      { path: 'hosts', loadChildren: () => import('./pages/hosts/hosts.module').then(m => m.HostsModule) },
      { path: 'firewalls', loadChildren: () => import('./pages/firewall/firewall.module').then(m => m.FirewallModule) },
      { path: 'manage', loadChildren: () => import('./pages/manage/manage.module').then(m => m.ManageModule) },
      { path: 'teams', loadChildren: () => import('./pages/manage/teams/teams.module').then(m => m.TeamsModule) },
      { path: 'users', loadChildren: () => import('./pages/manage/users/users.module').then(m => m.UsersModule) },
      { path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'monitoring', loadChildren: () => import('./pages/monitoring/monitoring.module').then(m => m.MonitoringModule) },
      { path: 'tools', loadChildren: () => import('./pages/tools/tools.module').then(m => m.ToolsModule) },
      { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
