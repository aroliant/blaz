import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToolsComponent } from './tools/tools.component';


export const ToolsRoutes: Routes = [
  {
    path: '',
    component: ToolsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ToolsRoutes)
  ],
  declarations: [ToolsComponent]
})
export class ToolsModule { }
