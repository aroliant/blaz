import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  API_URL = environment.API_URL

  apps = []

  constructor(private http: HttpClient, private router: Router) {
  }


  createApp(data) {
    return this.http.post(this.API_URL + "/apps/create", data)
  }

  getApps() {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + "/apps").subscribe((result: any) => {
        this.apps = result.apps
        resolve(result)
      })
    })

  }


  getApp(index) {

    if (this.apps.length != 0) {
      return this.apps[index]
    }

    return this.router.navigate(['/apps'])

    
  }
}