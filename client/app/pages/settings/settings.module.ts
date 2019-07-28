import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from '../../services/settings.service';
import { FormsModule } from '@angular/forms';

export const SettingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent 
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SettingsRoutes)
  ],
  declarations: [SettingsComponent],
  providers: [SettingsService]
})
export class SettingsModule { }
