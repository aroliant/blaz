import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { environment } from 'client/environments/environment';

@Component({
  selector: 'app-detail-deployment',
  templateUrl: './deployment.component.html',
  styleUrls: ['./deployment.component.css']
})
export class DeploymentComponent implements OnInit, OnChanges {

  @Input() activeTab;
  @Input() app;
  showTab = false;

  fileUploadBtn = 'Upload & Deploy';
  fileUploadMessage = '';
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.showTab = this.activeTab === 'deployment' ? true : false;
  }

  uploadTarFile() {
    const fileKey = 'files';
    const file = document.getElementById('tarBallFile')[fileKey][0];

    const formdata = new FormData();
    formdata.append('sourceFile', file);

    const ajax = new XMLHttpRequest();

    ajax.upload.addEventListener('progress', (progress) => {

      this.fileUploadBtn = 'Uploading';
      const total = progress.total;
      const uploaded = progress.loaded;
      const percentage = (uploaded / total) * 100;
      if (total === uploaded) {
        return this.fileUploadMessage = `File Uploaded, Build in Progress...`;
      }

      this.fileUploadMessage = `Uploading ${Math.round(percentage)}
       ( ${Math.round(uploaded / (1024 * 1024))} MB  of ${Math.round(total / (1024 * 1024))} MB)`;

    }, false);
    ajax.addEventListener('load', (event) => {
      this.fileUploadMessage = 'File Deployed';
      this.fileUploadBtn = 'Upload & Deploy';
    }, false);
    ajax.addEventListener('error', (event) => {
      this.fileUploadMessage = 'Unable to Deploy this file';
      this.fileUploadBtn = 'Upload & Deploy';
    }, false);
    ajax.addEventListener('abort', (event) => {
      this.fileUploadBtn = 'Upload & Deploy';
    }, false);
    ajax.open('POST', environment.API_URL + '/apps/upload');
    ajax.setRequestHeader('x-app-id', this.app.appID);
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
