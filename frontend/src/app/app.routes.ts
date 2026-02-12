import { Routes } from '@angular/router';
import {LandingPage} from './components/landing-page/landing-page';
import {ShowAbility} from './components/show-ability/show-ability';
import {authGuard} from './guards/auth-guard';
import {RegisterUser} from './components/register-user/register-user';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'dashboard', component: ShowAbility, canActivate: [authGuard] },
  { path: 'register/user', component: RegisterUser},
  { path: '**', component: LandingPage }
];
