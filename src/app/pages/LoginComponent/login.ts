import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: '../LoginComponent/login.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    // çok basit kontrol (ileride service ile yapılacak)
    if (this.username === 'admin' && this.password === '1234') {
      // başarılı giriş => dashboard’a yönlendir
      this.router.navigate(['/dashboard']);
    } else {
      alert('Kullanıcı adı veya şifre hatalı!');
    }
  }
}
