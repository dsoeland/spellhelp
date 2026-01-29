import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private baseUrl = 'http://localhost:8080/api/auth';
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, credentials, {responseType: "text"}).pipe(
      tap(token => {
        this.saveToken(token)
      })
    );
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout():void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
