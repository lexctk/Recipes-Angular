import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../ngrx/app.reducers';
import * as AuthActions from '../ngrx/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'displayName': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onRegister() {
    const email = this.registerForm.value.email;
    const displayName = this.registerForm.value.displayName;
    const password = this.registerForm.value.password;
    this.store.dispatch(new AuthActions.TryRegister({email: email, password: password, displayName: displayName}));
  }
}
