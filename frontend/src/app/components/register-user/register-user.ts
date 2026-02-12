import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Auth} from '../../services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: Auth, private router: Router) {
    this.registerForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("The form has been submitted", this.registerForm.value);
    this.auth.registerUser(this.registerForm.value).subscribe(
      data => {
        console.log(data);
      }
    );
    this.router.navigate(['login']);
  }

}
