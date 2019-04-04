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
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
