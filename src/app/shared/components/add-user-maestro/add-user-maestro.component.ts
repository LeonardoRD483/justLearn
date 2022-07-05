import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-user-maestro',
  templateUrl: './add-user-maestro.component.html',
  styleUrls: ['./add-user-maestro.component.scss']
})
export class AddUserMaestroComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  fb_doctor: FormGroup = this.fb.group({
    name: [''],
    last_name: [''],
    date: [''],
    userName: [''],
    password: ['']
  })

  onValidation() {

  }

  createUserMaestr() {
    this.userService.createUser(this.fb_doctor.get('userName')?.value,
      this.fb_doctor.get('password')?.value,
      this.fb_doctor.get('date')?.value,
      this.fb_doctor.get('name')?.value,
      this.fb_doctor.get('last_name')?.value)
      .subscribe((response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(response)
      }, err => {
        console.log(err);
      })
  }
}
