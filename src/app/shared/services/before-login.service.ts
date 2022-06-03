import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService {

  constructor(
    private token: TokenService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // return !this.token.loggedIn();
    // if user did not login we allow user go to login page
    if (!this.token.loggedIn()) {
      return !this.token.loggedIn();
    }
    // otherwise go to admin page
    else {
      this.router.navigateByUrl('/admin');
      return true;
    }
  }
}

