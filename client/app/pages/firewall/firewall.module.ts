import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirewallsComponent } from './list/firewalls.component';
import { FirewallComponent } from './view/firewall.component';


export const FirewallRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: FirewallsComponent,
      },
      {
        path: 'firewall',
        component: FirewallComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FirewallRoutes)
  ],
  declarations: [FirewallsComponent, FirewallComponent]
})
export class FirewallModule { }
