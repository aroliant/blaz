import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './teams/edit/edit.component';
import { NewComponent } from './teams/new/new.component';


export const ManageRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'teams',
                component: TeamsComponent,
            },
            {
                path: 'projects',
                component: ProjectsComponent,
            },
            {
                path: 'users',
                component: UsersComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ManageRoutes)
    ],
    declarations: [
        TeamsComponent,
        ProjectsComponent,
        UsersComponent,
        EditComponent,
        NewComponent
    ]
})
export class ManageModule { }
