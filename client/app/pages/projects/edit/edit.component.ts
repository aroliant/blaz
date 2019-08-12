import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'client/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(private projectsService: ProjectsService,private route: ActivatedRoute) { }

  project: {}
  id
  displaySearchedTeams : []
  displaySearchedUsers : []
  toSearchTeam = ""
  toSearchUser = ""
  teams = []
  users = []

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id
      this.projectsService.getProject(data.id).subscribe((res:any) => {
        if(res.success){
          this.project = res.project;
        }
      })
    })
  }

  searchUsers() {
    if(this.toSearchUser == "" || this.toSearchUser == null){
      this.displaySearchedUsers = [];
      return;
    }
    this.projectsService.searchUser(this.toSearchUser).subscribe((res:any)=>{
      if(res.success){
        this.displaySearchedUsers = res.users;
      }
    })
  }

  searchTeams() {
    if(this.toSearchTeam == ""){
      this.displaySearchedTeams = [];
      return;
    }
    this.projectsService.searchTeam(this.toSearchTeam).subscribe((res:any)=>{
      if(res.success){
        this.displaySearchedTeams = res.teams;
      }
    })
  }

  addTeamInProject(team){
    this.projectsService.addTeamInProject(this.id,team.teamID).subscribe((res:any)=>{
      if(res.success){
        this.teams.push(team);
      }
    })
  }

  addUserInProject(user){
    this.projectsService.addUserInProject(this.id,user.userID).subscribe((res:any)=>{
      if(res.success){
        this.users.push(user);
      }
    })
  }

}
