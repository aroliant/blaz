import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class TeamsService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  getTeams() {
    return this.http.get(this.API_URL + '/teams');
  }

  getTeam(teamID) {
    return this.http.get(this.API_URL + '/teams/' + teamID);
  }

  createTeam(team) {
    return this.http.post(this.API_URL + '/teams', team);
  }

  searchUser(toSearchInUser) {
    // return this.http.get(this.API_URL + '/users/search/' + toSearchInUser);
    return this.http.get(this.API_URL + '/users');
  }

  addUserToTeam(teamID, userID) {
    return this.http.put(this.API_URL + '/teams/' + teamID + '/user/add', { userID });
  }

}
