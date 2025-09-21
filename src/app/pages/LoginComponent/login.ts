import { Component, inject, InputOptions } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { IAuthService } from '../../services/auth.service';
import { DummyAuthService } from '../../services/dummyjsonAuthService';



@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: '../LoginComponent/login.html'
})
export class LoginComponent {
  username = '';
  password = '';

  private authService: IAuthService = inject(DummyAuthService)

 constructor(private router: Router) {}

  login() { 
    this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
            console.log('Login successful', response);
            this.router.navigateByUrl('/dashboard');
            // Başarılı giriş sonrası yapılacak işlemler
        },
        error: (error) => {
            console.error('Login failed', error);
            // Hata durumunda yapılacak işlemler
        }
    });
  }
}
