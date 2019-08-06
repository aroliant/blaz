import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'client/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UsersService {

  API_URL = environment.API_URL

  constructor(private http: HttpClient, private router: Router) { }

  getUsers() {
    return this.http.get(this.API_URL + "/users")
  }

  getUser(str) {
    return this.http.get(this.API_URL + "/users/"+str)
  }

  createUser(data) {
    return this.http.post(this.API_URL + "/users",data);
  }

}