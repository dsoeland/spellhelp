import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: Auth) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login attempt with: ', this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (token) => {
          console.log('login successful');
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log('login error: ', error);
          alert('Invalid username or password');
        }
      });
    }
  }
}
