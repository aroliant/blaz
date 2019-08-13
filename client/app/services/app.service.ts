import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) {
  }

  getDashboard() {
    return this.http.get(this.API_URL + '/dashboard');
  }

  createApp(data) {
    return this.http.post(this.API_URL + '/apps/create', data);
  }

  updateApp(data) {
    return this.http.put(this.API_URL + `/apps/${data.appID}`, data);
  }

  getApps() {
    return this.http.get(this.API_URL + '/apps');
  }

  getApp(appID) {
    return this.http.get(this.API_URL + '/apps/' + appID);
  }

  getAppDetails(appID) {
    return this.http.get(this.API_URL + '/apps/' + appID + '/details');
  }

  addUserToApp(appID, userID) {
    return this.http.put(this.API_URL + '/apps/' + appID + '/user/add', { userID });
  }

  addTeamToApp(appID, teamID) {
    return this.http.put(this.API_URL + '/apps/' + appID + '/team/add', { teamID });
  }

  getMetrics(serviceName) {
    return this.http.post(this.API_URL + '/metrics/containers', { serviceName }, {
      headers: { ignoreLoadingBar: '' },
    });
  }

  deployDockerfile(dockerfile, appID) {
    return this.http.post(this.API_URL + '/apps/upload', { dockerFileSource: dockerfile }, {
      headers: {
        'x-app-id': appID
      },
    });
  }

}
