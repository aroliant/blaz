import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'client/app/services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  team = {
    teamName: "",
    teamEmail: ""
  }

  constructor(private teamsService: TeamsService,private router: Router) { }

  ngOnInit() {
  }

  createTeam(){
    this.teamsService.createTeam(this.team).subscribe((res:any)=>{
      if(res.success){
        alert("Team Created");
        this.router.navigate(["/teams"]);
      }
    })
  }

}
