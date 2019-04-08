import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { FirewallComponent } from './firewall/firewall.component';


export const FirewallRoutes: Routes = [
  {
    path: '',
    component: FirewallComponent  
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FirewallRoutes)
  ],
  declarations: [FirewallComponent]
})
export class FirewallModule { }
