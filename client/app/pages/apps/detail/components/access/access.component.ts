import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit, OnChanges {

  @Input() activeTab;
  @Input() app;
  showTab = false;
  id;
  teams = [];
  teamSearchResult = [];
  userSearchResult = [];
  users = [];
  teamSearchKeyword = '';
  userSearchKeyword = '';

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id;
    });
  }

  ngOnChanges() {
    this.showTab = this.activeTab === 'access' ? true : false;
  }

  searchUsers() {
    this.appService.searchUser(this.userSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.userSearchResult = res.users;
      }
    });
  }

  addUserInApp(user) {
    this.appService.addUserInApp(this.id, user.userID).subscribe((res: any) => {
      if (res.success) {
        this.users.push(user);
      }
    });
  }

  searchTeams() {
    this.appService.searchTeam(this.teamSearchKeyword).subscribe((res: any) =>  {
      if (res.success) {
        this.teamSearchResult = res.teams;
      }
    });
  }

  addTeamInApp(team) {
    this.appService.addTeamInApp(this.id, team.teamID).subscribe((res: any) =>  {
      if (res.success) {
        this.teams.push(team);
      }
    });
  }

}
