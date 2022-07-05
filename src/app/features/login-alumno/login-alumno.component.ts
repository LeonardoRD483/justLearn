import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {Router} from "@angular/router";
import {AddUserMaestroComponent} from "../../shared/components/add-user-maestro/add-user-maestro.component";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.component.html',
  styleUrls: ['./login-alumno.component.scss']
})
export class LoginAlumnoComponent implements OnInit {


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
    this.userService.loginAlumno(this.fb_doctor.get('userName')?.value, this.fb_doctor.get('password')?.value)
      .subscribe((response: any) => {
        localStorage.setItem('alumno_id', response.id)
        if (response && response.tipo === '0') {
          this.router.navigate(["layout-alummno/card-game"]);
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
