//*** Original Code ***
// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('frontend');
// }




import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // We write the HTML directly here for simplicity:
  template: `
    <div style="text-align:center; margin-top: 50px;">
      <h1>SpellHelp (Modern Stack)</h1>
      <h2>Backend says: {{ message }}</h2>
    </div>
  `,
  styles: []
})
export class App {
  http = inject(HttpClient);
  message = 'Loading...';

  constructor() {
    this.http.get('http://localhost:8080/api/abilities', { responseType: 'text' })
      .subscribe({
        next: (data) => this.message = data,
        error: (err) => {
          console.error(err);
          this.message = 'Error connecting to backend (Is it running?)';
        }
      });
  }
}
