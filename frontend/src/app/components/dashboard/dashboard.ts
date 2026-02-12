import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  abilitiesCount: number = 0;

  constructor(
    private http: HttpClient,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/abilities').subscribe(data => {
      this.abilitiesCount = data.length;
    });
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
