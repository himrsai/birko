import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';
import { SuccessComponent } from './core/success/success.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { BirkoUserComponent } from './user/birko-user/birko-user.component';
import { CustomerComponent } from './user/customer/customer.component';
import { DocumentsComponent } from './user/documents/documents.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { EventLogsComponent } from './user/event-logs/event-logs.component';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalPopupComponent } from './core/modal-popup/modal-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    LogoutComponent,
    SuccessComponent,
    ResetPasswordComponent,
    DashboardComponent,
    BirkoUserComponent,
    CustomerComponent,
    DocumentsComponent,
    EventLogsComponent,
    ModalPopupComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,    
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
