import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/list/list.component';
import { TeamListComponent } from './teams/list/list.component';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';


export const ManageRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'teams',
                component: TeamListComponent
            },
            {
                path: 'users',
                component: UserListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ManageRoutes),
        UsersModule,
        TeamsModule
    ],
})
export class ManageModule { }
