import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../dashboard/dashboard.html',
  imports: [NgIf]
})
export class DashboardComponent implements OnInit {
  username = '';

  constructor(private authService: AuthService, private router: Router) {}

  role ='';
  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.role = this.authService.getRole();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateTo(page: string) {
  this.router.navigate([`/${page}`]);
}

}
