import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { LoginService } from 'src/app/shared/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'birko';
  hide = true;
  message: any;
  loginForm: FormGroup;
  submitted = false;

  
  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar, public loginSer: LoginService,
    public router: Router,  private errorHandler: ErrorHandlerService) {   
      this.loginForm = this.fb.group({});
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) 
    return;

    let data = this.loginForm.value;
    this.loginSer.loginAccess(data).subscribe(data => {
      let resData: any;
        resData = data;
      if (data !== null) {
        localStorage.setItem('token', resData.data.token);
        this.router.navigate(['/dashboard/user']);
        
      }
    }), ((error: any) => {
      this.openSnackBar("Error: "+ error , 'X', 'redNoMatch');
    })
  }
  openSnackBar(message: string, action: string, className: string) {
    console.log(action);
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: [className],
    });
  }
}
