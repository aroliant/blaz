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
  activeTab = 'overview';

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      this.appService.getApp(data.appID).subscribe((res: any) => {
        this.app = res.app;
        console.log(this.app);
      });
    });

  }

  changeTab(tab) {
    this.activeTab = tab;
    console.log(this.activeTab);
  }


}
