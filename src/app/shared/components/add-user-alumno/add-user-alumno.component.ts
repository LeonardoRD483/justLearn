import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  fb_doctor: FormGroup = this.fb.group({
    name: [''],
    last_name: [''],
    date: [''],
    direction: [''],
    photo: [''],
    telefonos: this.fb.array([this.fb.group({ nombre: [''], email: [''], contacto: [''], empresa_id: [''] })])

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
    this.control.push(this.fb.group({ nombre: [], email: [], contacto: [], empresa_id: [] }))
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
}
