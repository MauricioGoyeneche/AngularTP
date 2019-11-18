import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://utn2019-avanzada2-tp9.herokuapp.com/';

  constructor(private http: HttpClient) {
  }


  register(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.url + 'sign-up', user, httpOptions);
  }

  checkEmail(email: string): Observable<any> {
    return this.http.get(this.url + 'users/identities?email=' + email, {observe: 'response'});
  }
}
