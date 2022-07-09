import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {TokenService} from '../../shared/services/token.service';
import {Router} from '@angular/router';
import {AuthGuardService} from '../../shared/services/auth-guard.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private authGuard: AuthGuardService,
    private _location: Location
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
    this.auth.signup(this.form).subscribe(
      res => this.handleResponse(res)
    );
  }
  handleResponse(data) {
    this.token.handleToken(data);
    this.authGuard.changeAuthStatus(true);
    this.router.navigateByUrl('/admin/student-list');
  }

  back(){
this._location.back();
  }
}
