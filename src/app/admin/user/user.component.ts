import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import Swal from 'sweetalert2';
import {TokenService} from 'src/app/shared/services/token.service';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';
import {AuthGuardService} from '../../shared/services/auth-guard.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lstUsers = [];

  form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null,
    type: null
  };
  selectedType = '';

  selectChangeHandler(event: any) {
    this.selectedType = event.target.value;
  }

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private authGuard: AuthGuardService,
    private _location: Location,
    private http: HttpClient, private tokenService: TokenService
  ) {
  }


  ngOnInit() {
   let user =  this.tokenService.getUserInfo();
    // tslint:disable-next-line:triple-equals
   if(user.type != 'ADMIN'){
     this.router.navigateByUrl('/admin/student-list');
   }
   console.log('user',user);
    this.getAllUsers();
  }

  onSubmit() {
    this.form.type = this.selectedType;
    console.log(this.form);
    this.auth.signup(this.form).subscribe(
      res => this.handleResponse(res)
    );
  }

  handleResponse(data) {
    this.token.handleToken(data);
    this.authGuard.changeAuthStatus(true);
    this.router.navigateByUrl('/admin/post');
  }

  back() {
    this._location.back();

  }

  getAllUsers() {
    const token = this.tokenService.get();
    const header = new HttpHeaders().set(
      'Authorization',
      'Bearer' + token
    );

    this.http.get(environment.baseUrl + 'auth/users', {headers: header})
      .subscribe((res: any) => {
          // console.log(res);
          this.lstUsers = res.data.data;
        },
        error => {
          Swal.fire(
            'Token Expired!',
            error.message,
            'error'
          );
        }
      );

  }

}
