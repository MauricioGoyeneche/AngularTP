import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {CustomValidator} from '../../validators/custom-validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;
  private alert: string;

  constructor(private user: User, private service: UserService, private route: Router, private validator: CustomValidator) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required, Validators.email], [this.validator.validate.bind(this.validator)]),
      password: new FormControl(this.user.password, [Validators.required])
    });
  }

  register() {
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    const observable = this.service.register(this.user);
    observable.subscribe(() => {
        this.route.navigate(['login']).then();
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 409) {
            this.alert = 'Error: E-mail already exists.';
          } else {
            this.alert = 'Error: Oops, an error has happened, try again.';
          }
        }
      });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
