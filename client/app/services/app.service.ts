import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  API_URL = environment.API_URL

  constructor(private http: HttpClient, private router: Router) {
  }

  createApp(data) {
    return this.http.post(this.API_URL + "/apps/create", data)
  }

  getApps() {
    return this.http.get(this.API_URL + "/apps")
  }

  getApp(appID) {
    return this.http.get(this.API_URL + "/apps/" + appID)
  }

}