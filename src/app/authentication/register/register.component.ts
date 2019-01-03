import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService) { }

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
    this.authService.register(email, password, displayName);
  }
}
