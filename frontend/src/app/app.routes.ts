import { Routes } from '@angular/router';
import {LandingPage} from './components/landing-page/landing-page';
import {ShowAbility} from './components/show-ability/show-ability';
import {authGuard} from './guards/auth-guard';
import {RegisterUser} from './components/register-user/register-user';
import {Dashboard} from './components/dashboard/dashboard';
import {ManageAbilities} from './components/manage-abilities/manage-abilities';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'practice', component: ShowAbility, canActivate: [authGuard] },
  { path: 'manage-abilities', component: ManageAbilities},
  { path: 'register/user', component: RegisterUser},
  { path: '**', component: LandingPage }
];
