import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'client/environments/environment';

declare var $: any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class AppDetailComponent implements OnInit {


  app;
  appDetails = {
    users: [],
    teams: [],
    versions: []
  };
  activeTab = 'overview';
  appID;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      this.appID = data.appID;
      this.appService.getApp(data.appID).subscribe((res: any) => {
        this.app = res.app;
      });

      this.appService.getAppDetails(data.appID).subscribe((res: any) => {
        this.appDetails = res;
      });

    });

  }

  changeTab(tab) {
    this.activeTab = tab;
    console.log(this.activeTab);
  }


}
