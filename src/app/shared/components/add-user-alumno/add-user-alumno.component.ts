import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-user-alumno',
  templateUrl: './add-user-alumno.component.html',
  styleUrls: ['./add-user-alumno.component.css']
})
export class AddUserAlumnoComponent implements OnInit {
  private imagePath: any;

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  private _message: string;

  constructor(private fb: FormBuilder, private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  fb_doctor: FormGroup = this.fb.group({
    name: [''],
    last_name: [''],
    date: [''],
    telefonos: this.fb.array([this.fb.group({materia: [''], alumno_id: [1], nota: ['']})])

  })
  control = <FormArray>this.fb_doctor.controls['telefonos']

  panelOpenState: boolean;
  imgURL: any;
  file_input: string;

  onValidation() {

  }

  get getTelefonos() {
    return this.fb_doctor.get('telefonos') as FormArray;
  }

  addTelefono() {
    this.control.push(this.fb.group({materia: [''], alumno_id: [1], nota: ['']}))
  }

  remove(pointIndex: number) {
    const control = <FormArray>this.fb_doctor.controls['telefonos']
    control.removeAt(pointIndex)
  }


  preview(files: any) {
    console.log("algo esta pasando y no entiendo")
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this._message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imgURL)
    }
  }

  createUser() {
    let userAndPassword = this.generatedUserAndPassword();
    this.userService.createUserAlumno(userAndPassword.userName,
      userAndPassword.password,
      this.fb_doctor.get('date')?.value,
      this.fb_doctor.get('name')?.value,
      this.fb_doctor.get('last_name')?.value, 1).subscribe((response) => {
        this.createMateriaByUser();
        console.log(response)
      }, err => {
        console.log(err)
      }
    )
  }

  generatedUserAndPassword(): any {
    let userName = this.fb_doctor.get('name')?.value + this.fb_doctor.get('last_name')?.value;
    let password = `$${userName}`;
    return {
      userName,
      password
    }
  }

  createMateriaByUser() {
    console.log(this.fb_doctor.get('telefonos')?.value);
    this.userService.createMateriaAndGeneratedLevel(this.fb_doctor.get('telefonos')?.value).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }, error => {
        console.log(error);
      }
    )
  }

}
