import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class TeamsService {

  API_URL = environment.API_URL

  constructor(private http: HttpClient, private router: Router) { }

  getTeams() {
    return this.http.get(this.API_URL + "/teams")
  }

  getTeam(str) {
    return this.http.get(this.API_URL + "/teams/"+str)
  }

  createTeam(data) {
    return this.http.post(this.API_URL + "/teams",data);
  }

}