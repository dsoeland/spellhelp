
import {Component, HostListener, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ShowAbility} from './components/show-ability/show-ability';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ShowAbility
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  constructor() {}


}




