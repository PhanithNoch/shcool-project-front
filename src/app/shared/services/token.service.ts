import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    signup: 'http://127.0.0.1:8000/api/auth/signup'
  };

  constructor() {
  }



  storeUserInfo(user){
    localStorage.setItem('user_info',JSON.stringify(user));
  }
  handleToken(data) {
    console.log('data : ', data);
    this.storeUserInfo(data.user);
    this.set(data.access_token);
    console.log(this.isValid());
  }

  get() {
    return localStorage.getItem('token');
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {
// get token after login SUCCESS
    const token = this.get();
    if (this.get()) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
        // console.log(payload);
      }
      return false;
    }
  }

  // get token to get payload
  // get payload
  payload(token) {
    // console.log('token ' + token);
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
