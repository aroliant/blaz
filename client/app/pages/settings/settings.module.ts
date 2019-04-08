import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SettingsComponent } from './settings/settings.component';


export const SettingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
