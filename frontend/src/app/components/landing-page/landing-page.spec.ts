import { ComponentFixture, TestBed } from '@angular/core/testing';

import { render, screen, fireEvent } from '@testing-library/angular';
import { LandingPage } from './landing-page';
import {ReactiveFormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import { Auth } from '../../services/auth';
import { of, throwError } from 'rxjs';
import { vi } from 'vitest'

describe('LandingPage QA Suite', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [LandingPage, ReactiveFormsModule],
  //     providers: [provideHttpClient(), provideHttpClientTesting()]
  //   })
  //   .compileComponents();
  //
  //   fixture = TestBed.createComponent(LandingPage);
  //   component = fixture.componentInstance;
  //   await fixture.whenStable();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should have the login button disabled by default', async () => {
    await render(LandingPage, {
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });

    const button = screen.getByRole('button', { name: /login/i }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });


  it('should call auth service when form is valid and submitted', async () => {
    const { fixture } = await render(LandingPage, {
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });

    const authService = fixture.debugElement.injector.get(Auth);
    const loginSpy = vi.spyOn(authService, 'login').mockReturnValue(of('fake-jwt-token'));

    const emailInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /login/i }) as HTMLButtonElement;

    fireEvent.input(emailInput, { target: { value: 'email@gmail.com' }});
    fireEvent.input(passwordInput, { target: { value: '1234' }});

    expect(button.disabled).toBe(false);
    fireEvent.click(button);

    expect(loginSpy).toHaveBeenCalledWith({ username: 'email@gmail.com', password: '1234' });
  });

  it('should handle login failure gracefully', async () => {
    const { fixture } = await render(LandingPage, {
      imports: [ReactiveFormsModule],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });

    const authService = fixture.debugElement.injector.get(Auth);
    vi.spyOn(authService, 'login').mockReturnValue(throwError(() => new Error('401')));
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})


    fireEvent.input(screen.getByLabelText(/username/i), { target: { value: 'wrong@test.com'}});
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'wrong' }});
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(alertSpy).toHaveBeenCalled();


  })

});
