import {UserService} from '../services/user.service';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CustomValidator implements AsyncValidator {

  constructor(private service: UserService) {

  }

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.checkEmail(ctrl.value).pipe(
      map(() => null),
      catchError(err => {
        if (err.status === 409) {
          return of({
            emailExists: true
          });
        }
        console.error(err);
        return of(null);
      })
    );
  }
}
