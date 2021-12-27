import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from 'src/app/shared/loginService/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  
  title = 'birko';
  hide = true;
  message: any;
  loginForm: FormGroup;
  submitted = false;
  successStatus = false;
  hideStatus = true;
  
  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private loginService: LoginService) {   
      this.loginForm = this.fb.group({});
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } 
   
    let data = this.loginForm.value;

    this.loginService.forgotPassword(data).subscribe( data =>{
      let resData: any;
        resData = data;
      if(resData.data != null){
        this.loginService.displayMessage = "We have sent an email to " +this.loginForm.value.email +" with the  instructions to reset your account password. Please verify.";
        this.loginForm.reset();
        this.successStatus = true;
        this.hideStatus = false;
      } else {
        this.openSnackBar("Error: "+ resData.message , 'X', 'redNoMatch');
      }
     
    });
  }
  openSnackBar(message: string, action: string, className: string) {
    console.log(action);
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: [className],
    });
  }
}
