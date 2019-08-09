import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'client/app/services/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class TeamListComponent implements OnInit {

  teams : []

  constructor(private teamsService : TeamsService) { }

  ngOnInit() {
    this.teamsService.getTeams().subscribe((res:any)=>{
      if(res.success){
        this.teams = res.teams
      }
    })
  }

}
