import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalPopupComponent } from 'src/app/core/modal-popup/modal-popup.component';
import { LoginService } from 'src/app/shared/loginService/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  animal: any;
  name: any;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  @ViewChild('MatMenuTrigger', {static: true}) public MatMenuTrigger: any;

  constructor(public dialog: MatDialog, public loginSer: LoginService, public router: Router) {}

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalPopupComponent, {
      width: '400px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  logout() {
    this.loginSer.logoutAccess();
    this.router.navigate(['/login']);
  }
}
interface Food {
  value: string;
  viewValue: string;
}
