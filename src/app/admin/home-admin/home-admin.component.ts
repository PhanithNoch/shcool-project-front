import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from '../../shared/services/auth-guard.service';
import {Router} from '@angular/router';
import {TokenService} from '../../shared/services/token.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  loggedIn: boolean;

  constructor(
    private auth: AuthGuardService
  ) {
  }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(res => this.loggedIn = res);
  }

}
