import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from 'src/app/shared/loginService/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 
  successStatus = false;
  hideStatus = true;
  title = 'birko';
  hide = true;
  message: any;
  loginForm: FormGroup;
  submitted = false;

  
  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private loginService: LoginService) {   
      this.loginForm = this.fb.group({});
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      passwordNew: ['', [Validators.required, Validators.minLength(4)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(4)]]
    }, { validators: this.checkPasswords });
  }
  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = this.loginForm.value.passwordNew;
    let confirmPass = this.loginForm.value.passwordConfirm
    return pass === confirmPass ? null : { notSame: true }
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) 
    return;

    let data = this.loginForm.value;
    this.loginService.resetpassword(data).subscribe(data =>{
    });
    this.successStatus= true;
    this.hideStatus = false;
    this.loginService.displayMessage = "Your password has been successfully reset.";
    this.loginForm.reset();
  }
  openSnackBar(message: string, action: string, className: string) {
    console.log(action);
    this._snackBar.open(message, action, {
      duration: 5000,
      panelClass: [className],
    });
  }

}
