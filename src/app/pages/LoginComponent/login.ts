import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';



@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: '../LoginComponent/login.html'
})
export class LoginComponent {
  username = '';
  password = '';

 constructor(private router: Router, private authService: AuthService) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  }
}
