import { Injectable } from '@angular/core';
import { IAuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private readonly storageKey = 'isLoggedIn';
  private readonly userKey = 'username';
  private readonly roleKey = 'role';

  private isLoggedIn = false;
  private username = '';
  private role = '';

  constructor() {
    const status = localStorage.getItem(this.storageKey);
    this.isLoggedIn = status === 'true';
    this.username = localStorage.getItem(this.userKey) || '';
    this.role = localStorage.getItem(this.roleKey) || '';
  }

  login(username: string, password: string): boolean {
    // Örnek: kullanıcı adı ve şifreye göre rol belirleme
    if (username === 'admin' && password === '1234') {
      this.isLoggedIn = true;
      this.username = username;
      this.role = 'admin';
    } else if (username === 'tezgah' && password === '1234') {
      this.isLoggedIn = true;
      this.username = username;
      this.role = 'tezgah';
    } else if (username === 'muhasebe' && password === '1234') {
      this.isLoggedIn = true;
      this.username = username;
      this.role = 'muhasebe';
    } else {
      this.isLoggedIn = false;
    }

    localStorage.setItem(this.storageKey, 'true');
    localStorage.setItem(this.userKey, this.username);
    localStorage.setItem(this.roleKey, this.role);
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
    this.role = '';
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.roleKey);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): string {
    return this.username;
  }

  getRole(): string {
    return this.role;
  }
}

