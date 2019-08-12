import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(private projectsService: ProjectsService, private route: ActivatedRoute) { }

  project: {};
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
    this.projectsService.searchUser(this.userSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.userSearchResult = res.users;
      }
    });
  }

  searchTeams() {
    this.projectsService.searchTeam(this.teamSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.teamSearchResult = res.teams;
      }
    });
  }

  addTeamInProject(team) {
    this.projectsService.addTeamInProject(this.id, team.teamID).subscribe((res: any) => {
      if (res.success) {
        this.teams.push(team);
      }
    });
  }

  addUserInProject(user) {
    this.projectsService.addUserInProject(this.id, user.userID).subscribe((res: any) => {
      if (res.success) {
        this.users.push(user);
      }
    });
  }

}
