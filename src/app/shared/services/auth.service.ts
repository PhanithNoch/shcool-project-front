import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(data) {
    return this.http.post(`${environment.baseUrl}auth/signup`, data);
  }

  login(user) {
    const headersObject = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    const httpOptions = {
      headers: headersObject,
    };
    return this.http.post(`${environment.baseUrl}auth/login`, user, httpOptions);
  }
}
