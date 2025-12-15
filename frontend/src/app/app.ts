//*** Original Code ***
import { Component, signal } from '@angular/core';
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

  constructor(private router: Router) {

  }

}




// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { RouterOutlet } from '@angular/router';
// import {catchError, Observable, of, startWith} from 'rxjs';
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   // We write the HTML directly here for simplicity:
//   template: `
//     <div style="text-align:center; margin-top: 50px;">
//       <h1>SpellHelp (Modern Stack)</h1>
//       <h2>Backend says: {{ message$ | async }}</h2>
//     </div>
//   `,
//   styles: []
// })
// export class App {
//   http = inject(HttpClient);
//   message$: Observable<string>;
//
//   constructor() {
//     this.message$ = this.http.get('http://localhost:8080/api/abilities', { responseType: 'text' })
//       .pipe(
//         startWith('Loading...'),
//         catchError (err => {
//           console.error(err);
//           return of('Error connecting to backend (Is it running?)');
//         })
//       );
//   }
// }
