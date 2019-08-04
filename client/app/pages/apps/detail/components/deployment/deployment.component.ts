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

  fileUploadBtn = 'Upload & Deploy'
  fileUploadMessage = ''
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.showTab = this.activeTab == 'deployment' ? true : false
  }

  uploadTarFile() {

    var file = document.getElementById('tarBallFile')['files'][0];

    var formdata = new FormData();
    formdata.append('sourceFile', file);

    var ajax = new XMLHttpRequest();

    ajax.upload.addEventListener('progress', (progress) => {

      this.fileUploadBtn = 'Uploading'
      let total = progress.total
      let uploaded = progress.loaded
      let percentage = (uploaded / total) * 100
      if (total == uploaded) {
        return this.fileUploadMessage = `File Uploaded, Build in Progress...`
      }

      this.fileUploadMessage = `Uploading ${Math.round(percentage)} ( ${uploaded / (1024 * 1024)} MB  of ${total / (1024 * 1024)} MB)`

    }, false);
    ajax.addEventListener('load', (event) => {
      this.fileUploadMessage = 'File Deployed'
      this.fileUploadBtn = 'Upload & Deploy'
    }, false);
    ajax.addEventListener('error', (event) => {
      this.fileUploadMessage = 'Unable to Deploy this file'
      this.fileUploadBtn = 'Upload & Deploy'
    }, false);
    ajax.addEventListener('abort', (event) => {
      this.fileUploadBtn = 'Upload & Deploy'
    }, false);
    ajax.open('POST', environment.API_URL + '/apps/upload');
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
