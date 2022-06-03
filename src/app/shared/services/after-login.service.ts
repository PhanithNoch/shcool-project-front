import { Injectable } from '@angular/core';
import {TokenService} from './token.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService {

  constructor(
    private token: TokenService,
    private router: Router
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.token.loggedIn()){
      return this.token.loggedIn();
    }
    else{
      this.router.navigateByUrl('/login');
      return this.token.loggedIn();
    }

  }

}
