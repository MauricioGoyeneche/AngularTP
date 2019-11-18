import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  checkLogin(url: string): boolean {
    if (this.auth.token) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.auth.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(['/login']).then();
    return false;
  }
}
