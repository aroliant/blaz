import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class SettingsService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  getRootDomain() {
    return this.http.get(this.API_URL + '/settings/rootdomain');
  }

  updateRootDomain(data) {
    return this.http.put(this.API_URL + '/settings/rootdomain', data);
  }

}
