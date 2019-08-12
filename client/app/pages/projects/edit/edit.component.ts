import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'client/app/services/users.service';
import { TeamsService } from 'client/app/services/teams.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService,
    private userService: UsersService,
    private teamService: TeamsService,
    private route: ActivatedRoute
  ) { }

  project: any;
  id;
  teamSearchResult: [];
  userSearchResult: [];
  teamSearchKeyword = '';
  userSearchKeyword = '';
  teams = [];
  users = [];

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id;
      this.projectsService.getProject(data.id).subscribe((res: any) => {
        if (res.success) {
          this.project = res.project;
        }
      });
    });
  }

  searchUsers() {
    this.userService.searchUsers(this.userSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.userSearchResult = res.users;
      }
    });
  }

  searchTeams() {
    this.teamService.searchTeams(this.teamSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.teamSearchResult = res.teams;
      }
    });
  }

  addTeamToProject(team) {
    this.projectsService.addTeamToProject(this.id, team.teamID).subscribe((res: any) => {
      if (res.success) {
        this.teams.push(team);
      }
    });
  }

  addUserToProject(user) {
    this.projectsService.addUserToProject(this.id, user.userID).subscribe((res: any) => {
      if (res.success) {
        this.users.push(user);
      }
    });
  }

}
