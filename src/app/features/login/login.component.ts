import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddUserMaestroComponent} from "../../shared/components/add-user-maestro/add-user-maestro.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog, private fb: FormBuilder, private userService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
  }

  fb_doctor: FormGroup = this.fb.group({
    userName: [''],
    password: [''],
  })

  openDialog() {
    const dialogRef = this.dialog.open(AddUserMaestroComponent, {
      width: '675px',
      height: '416px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('hello fini');
    });
  }

  login() {
    this.userService.login(this.fb_doctor.get('userName')?.value, this.fb_doctor.get('password')?.value)
      .subscribe((response: any) => {
        console.log(response);
        if (response && response.tipo === '1'){
          this.router.navigate(["layout/addMaestro"]);
        }
      }, err => {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        console.log(err);
      })
  }
}
