import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IAuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DummyAuthService implements IAuthService {

    isLoggedIn = false;

  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.sendUserCredentials(username, password).pipe(
        tap(response => {
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', response.username);
            localStorage.setItem('role', response.role);
            this.isLoggedIn = true;
        }
    ));
     
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  private sendUserCredentials(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  getUsername(): string {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.username;
    }
    return '';
  }

    getRole(): string {
    return localStorage.getItem('role') || '';
  }
}
