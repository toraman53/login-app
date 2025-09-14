import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/LoginComponent/login';
import { AuthGuard } from './auth-guard';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { Sales } from './pages/sales/sales';
import { Warehouse } from './pages/warehouse/warehouse';
import { Reports } from './pages/reports/reports';
import { Staff } from './pages/staff/staff';
import { Credit } from './pages/credit/credit';
import { Production } from './pages/production/production';


export const routes: Routes = [
  { path: '', component: HomeComponent },        // anasayfa
  { path: 'login', component: LoginComponent },  // login sayfası
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]}, // dashboard
  { path: 'sales', component: Sales, canActivate: [AuthGuard],data:{role:'tezgah'} },
  { path: 'warehouse', component: Warehouse, canActivate: [AuthGuard],data:{role:'tezgah'} },
  { path: 'reports', component: Reports, canActivate: [AuthGuard],data:{role:'muhasebe'} },
  { path: 'staff', component: Staff, canActivate: [AuthGuard],data:{role:'admin'} },
  { path: 'credit', component: Credit, canActivate: [AuthGuard],data:{role:'muhasebe'} },
  { path: 'production', component: Production, canActivate: [AuthGuard],data:{role:'admin'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
