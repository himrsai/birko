import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppService, getServiceUrl } from 'src/app/global/global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public displayMessage: string;
  constructor(private http: HttpClient) {
    this.displayMessage = '';
   }
    // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  public loginAccess(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(getServiceUrl(AppService.LoginAccess), body, this.httpOptions);
  }
  public logoutAccess() {
    return this.http.get(getServiceUrl(AppService.logoutAccess), this.httpOptions);
  }
  public forgotPassword(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(getServiceUrl(AppService.Forgotpassword), body, this.httpOptions);
  }
  public resetpassword(data: any) {
    const body = JSON.stringify(data);
    return this.http.post(getServiceUrl(AppService.ResetPassword), body, this.httpOptions);
  }
  public GetUsersList(token: any) {
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization : token
      })
    };
    return this.http.get(getServiceUrl(AppService.GetUsersList), httpOptions);
  }
}
