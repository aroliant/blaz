import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'client/environments/environment';

@Component({
  selector: 'app-detail-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit {

  @Input() activeTab;
  @Input() app;
  showTab = false

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.showTab = this.activeTab == "deployment" ? true : false
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
    ajax.open("POST", environment.API_URL + "/apps/upload");
    ajax.setRequestHeader('x-app-id', this.app.appID)
    ajax.send(formdata);
  }

  deployDockerFile() {

  }

  updateWebhook() {

  }

  getVersions() {

  }

  getLogs() {

  }

}
