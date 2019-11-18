import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://utn2019-avanzada2-tp9.herokuapp.com/';
  token = undefined;
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {

  }

  login(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const observable = this.http.post(this.url + 'login', user, httpOptions);
    observable.subscribe(next => {
        this.token = next['jwt'];
        localStorage.setItem('token', this.token);
        this.router.navigate(['list']).then();
        console.log('Token: ' + this.token);
      },
      () => {
      });
    return observable;
  }

  logout(): void {
    this.token = undefined;
    localStorage.removeItem('token');
    this.router.navigate(['/login']).then();
  }
}
