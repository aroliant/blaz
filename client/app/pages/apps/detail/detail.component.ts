import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'client/environments/environment';

declare var $: any
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  app
  activeTab = "overview"

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      this.appService.getApp(data.appID).subscribe((res: any) => {
        this.app = res.app
      })
    })

  }

  changeTab(tab) {
    this.activeTab = tab
    console.log(this.activeTab)
  }


  uploadTarFile() {

    var file = document.getElementById("tarBallFile")['files'][0];

    var formdata = new FormData();
    formdata.append("sourceFile", file);

    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", (event) => {

    }, false);
    ajax.addEventListener("load", (event) => {

      alert("File Deployed")

    }, false);
    ajax.addEventListener("error", (event) => {
      alert("Unable to Deploy this file")
    }, false);
    ajax.addEventListener("abort", (event) => {

    }, false);
    ajax.open("POST", environment.API_URL + "/apps/deploy/file/" + this.app.appID);
    ajax.send(formdata);
  }

}
