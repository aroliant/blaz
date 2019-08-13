import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirewallListComponent } from './list/firewalls.component';
import { FirewallViewComponent } from './view/firewall.component';


export const FirewallRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FirewallListComponent,
      },
      {
        path: 'firewall',
        component: FirewallViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FirewallRoutes)
  ],
  declarations: [FirewallListComponent, FirewallViewComponent]
})
export class FirewallModule { }
