import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HostsComponent } from './hosts/hosts.component';


export const HostsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HostsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HostsRoutes)
  ],
  declarations: [
    HostsComponent,
  ]
})
export class HostsModule { }
