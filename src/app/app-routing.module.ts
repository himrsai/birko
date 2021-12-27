import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { LoginComponent } from './core/login/login.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { BirkoUserComponent } from './user/birko-user/birko-user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { DocumentsComponent } from './user/documents/documents.component';
import { EventLogsComponent } from './user/event-logs/event-logs.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent ,
  children: [
   {path: 'user', component: BirkoUserComponent},
   {path: 'customer', component: CustomerComponent},
   {path: 'documents', component: DocumentsComponent},
   {path: 'event-logs', component: EventLogsComponent}
 ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }
