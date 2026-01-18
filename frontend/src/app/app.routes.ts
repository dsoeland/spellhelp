import { Routes } from '@angular/router';
import {LandingPage} from './components/landing-page/landing-page';
import {ShowAbility} from './components/show-ability/show-ability';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'dashboard', component: ShowAbility },
  { path: '**', component: LandingPage }
];
