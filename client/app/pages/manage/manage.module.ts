import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './users/list/list.component';
import { TeamListComponent } from './teams/list/list.component';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { TeamsService } from 'client/app/services/teams.service';
import { UsersService } from 'client/app/services/users.service';


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
        FormsModule,
        RouterModule.forChild(ManageRoutes),
        UsersModule,
        TeamsModule
    ],
    providers: [
        UsersService
      ]
})
export class ManageModule { }
