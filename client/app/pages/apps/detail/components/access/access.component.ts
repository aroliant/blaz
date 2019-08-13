import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'client/app/services/users.service';
import { TeamsService } from 'client/app/services/teams.service';

@Component({
  selector: 'app-detail-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit, OnChanges {

  @Input() activeTab;
  @Input() app;
  showTab = false;
  @Input() appID;
  @Input() teams = [];
  teamSearchResult = [];
  userSearchResult = [];
  @Input() users = [];
  teamSearchKeyword = '';
  userSearchKeyword = '';

  constructor(
    private appService: AppService,
    private userService: UsersService,
    private teamService: TeamsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.searchUsers('a');
    this.searchTeams('a');
  }

  ngOnChanges() {
    this.showTab = this.activeTab === 'access' ? true : false;
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

  addUserToApp(user) {
    this.appService.addUserToApp(this.appID, user.userID).subscribe((res: any) => {
      if (res.success) {
        this.users.push(user);
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

  addTeamToApp(team) {
    this.appService.addTeamToApp(this.appID, team.teamID).subscribe((res: any) => {
      if (res.success) {
        this.teams.push(team);
      }
    });
  }

}
