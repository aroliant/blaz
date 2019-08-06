import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class ProjectsService {

  API_URL = environment.API_URL

  constructor(private http: HttpClient, private router: Router) { }

  getProjects() {
    return this.http.get(this.API_URL + "/projects")
  }

  getProject(str) {
    return this.http.get(this.API_URL + "/projects/"+str);
  }

  createproject(data) {
    return this.http.post(this.API_URL + "/projects", data);
  }

}