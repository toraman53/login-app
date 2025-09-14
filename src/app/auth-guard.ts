import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
  const requiredRole = route.data['role'] as string;
  if (!this.authService.isAuthenticated()) {
    this.router.navigate(['/login']);
    return false;
  }
  if (requiredRole && this.authService.getRole() !== requiredRole) {
    alert('Bu sayfaya erişim yetkiniz yok!');
    this.router.navigate(['/dashboard']);
    return false;
  }
  return true;
}
}
