import { Component, OnInit } from '@angular/core';
import { AppService } from 'client/app/services/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'client/environments/environment';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  app

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((data) => {
      this.app = this.appService.getApp(data.appId)
    })

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
    ajax.open("POST", environment.API_URL + "/apps/upload/" + this.app.appName);
    ajax.send(formdata);
  }

}
