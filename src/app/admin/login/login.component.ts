import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {TokenService} from '../../shared/services/token.service';
import {AuthGuardService} from '../../shared/services/auth-guard.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    email: null,
    password: null
  };

  constructor(
    private auth: AuthService,
    private tokenService: TokenService,
    private authGuardService: AuthGuardService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.login(this.form).subscribe(
      res => this.handleResponse(res),
      error => {
        Swal.fire(
          'Message',
          'Username or Password invalid',
          'error'
        );
      }
  );
  }

  handleResponse(data) {
    this.tokenService.handleToken(data);
    this.authGuardService.changeAuthStatus(true);
    this.router.navigateByUrl('/admin/student-list');
  }
}
