import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HostsComponent } from './hosts/hosts.component';
import { DomainsComponent } from './domains/domains.component';


export const HostsAndDomainsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: "",
        component: HostsComponent,
      },
      {
        path: 'domains',
        component: DomainsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HostsAndDomainsRoutes)
  ],
  declarations: [
    HostsComponent,
    DomainsComponent
  ]
})
export class HostsModule { }
