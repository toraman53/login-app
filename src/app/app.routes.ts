import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/LoginComponent/login';


export const routes: Routes = [
  { path: '', component: HomeComponent },        // anasayfa
  { path: 'login', component: LoginComponent },  // login sayfası
  { path: 'dashboard', component: Dashboard } // dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
