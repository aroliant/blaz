import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'client/app/services/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  team: {}
  users = []
  id

  userSearchResult = [];
  userSearchKeyword = '';


  constructor(private teamsService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id;
      this.teamsService.getTeam(data.id).subscribe((res: any) => {
        if (res.success) {
          this.team = res.team;
          this.users = res.users;
        }
      })
    })

    this.searchUsers();

  }



  searchUsers() {
    this.teamsService.searchUser(this.userSearchKeyword).subscribe((res: any) => {
      if (res.success) {
        this.userSearchResult = res.users;
      }
    });
  }

  addUserInTeam(user) {
    this.teamsService.addUserToTeam(this.id, user.userID).subscribe((res: any) => {
      if (res.success) {
        this.users.push(user);
      }
    });
  }

}
