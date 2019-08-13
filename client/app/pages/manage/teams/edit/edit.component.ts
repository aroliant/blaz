import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'client/app/services/teams.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'client/app/services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  team: {};
  users = [];
  teamID;

  userSearchResult = [];
  userSearchKeyword = '';


  constructor(
    private teamsService: TeamsService,
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.teamID = data.teamID;
      this.teamsService.getTeam(this.teamID).subscribe((res: any) => {
        if (res.success) {
          this.team = res.team;
          this.users = res.users;
        }
      });
    });

    this.searchUsers('a');

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

  addUserToTeam(user) {
    this.teamsService.addUserToTeam(this.teamID, user.userID).subscribe((res: any) => {
      if (res.success) {
        this.users.push(user);
      }
    });
  }

}
