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

  getProject(projectID) {
    return this.http.get(this.API_URL + "/projects/" + projectID);
  }

  createproject(project) {
    return this.http.post(this.API_URL + "/projects", project);
  }

}