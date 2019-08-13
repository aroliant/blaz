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

  project = {
    projectName: '',
    projectDescription: '',
    projectLabels: []
  };
  projectID;
  teamSearchResult: [];
  userSearchResult: [];
  teamSearchKeyword = '';
  userSearchKeyword = '';
  teams = [];
  users = [];

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.projectID = data.projectID;
      this.projectsService.getProject(this.projectID).subscribe((res: any) => {
        if (res.success) {
          this.project = res.project;
        }
      });
    });
    this.searchUsers('a');
    this.searchTeams('a');
  }

  searchUsers(keyword) {
    if (keyword instanceof Object) {
      keyword = keyword.term;
    }
    this.userSearchKeyword = keyword;
    this.userService.searchUsers(this.userSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.userSearchResult = res.users;
      }
    });
  }

  searchTeams(keyword) {
    if (keyword instanceof Object) {
      keyword = keyword.term;
    }
    this.teamSearchKeyword = keyword;
    this.teamService.searchTeams(this.teamSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.teamSearchResult = res.teams;
      }
    });
  }

  addTeamToProject(team) {
    this.projectsService.addTeamToProject(this.projectID, team.teamID).subscribe((res: any) => {
      if (res.success) {
        this.teams.push({ Team: team });
      }
    });
  }

  addUserToProject(user) {
    this.projectsService.addUserToProject(this.projectID, user.userID).subscribe((res: any) => {
      if (res.success) {
        this.users.push({ User: user });
      }
    });
  }

}
