import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'isLoggedIn';
  private readonly userKey = 'username';
  private isLoggedIn = false;
  private username = '';

  constructor() {
    const status = localStorage.getItem(this.storageKey);
    this.isLoggedIn = status === 'false';
    const savedUsername = localStorage.getItem(this.userKey);
    this.username = savedUsername || '';
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '1234') {
      this.isLoggedIn = true;
      this.username = username;
      localStorage.setItem(this.storageKey, 'true');
      localStorage.setItem(this.userKey, username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.userKey);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}
