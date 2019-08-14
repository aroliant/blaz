import { Component, OnInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {

  dashboard = {
    apps: 0,
    teams: 0,
    users: 0,
    projects: 0,
    deployments: 0,
    activity: [],
    newTeams: [],
    newProjects: [],
    newUsers: [],
    recentDeployments: [],
  };

  constructor(private appService: AppService) { }

  ngOnInit() {

    this.appService.getDashboard().subscribe((res: any) => {

      if (res.success) {
        this.dashboard = res;
      }

    });

  }

}
