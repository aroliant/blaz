import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  @Input() activeTab;
  @Input() app;
  showTab = false
  id
  teams = []
  displaySearchedTeams : []
  displaySearchedUsers : []
  users = []
  toSearchTeam = ""
  toSearchUser = ""

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id
    })
  }
  
  ngOnChanges() {
    this.showTab = this.activeTab == "access" ? true : false
  }

  searchUsers() {
    if(this.toSearchUser == ""){
      this.displaySearchedUsers = [];
      return;
    }
    this.appService.searchUser(this.toSearchUser).subscribe((res:any)=>{
      if(res.success){
        this.displaySearchedUsers = res.users;
      }
    })
  }

  addUserInApp(user){
    this.appService.addUserInApp(this.id,user.userID).subscribe((res:any)=>{
      if(res.success){
        this.users.push(user);
      }
    })
  }

  searchTeams() {
    if(this.toSearchTeam == ""){
      this.displaySearchedTeams = [];
      return;
    }
    this.appService.searchTeam(this.toSearchTeam).subscribe((res:any)=>{
      if(res.success){
        this.displaySearchedTeams = res.teams;
      }
    })
  }

  addTeamInApp(team){
    this.appService.addTeamInApp(this.id,team.teamID).subscribe((res:any)=>{
      if(res.success){
        this.teams.push(team);
      }
    })
  }

}
