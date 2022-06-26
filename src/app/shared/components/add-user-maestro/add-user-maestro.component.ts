import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-user-maestro',
  templateUrl: './add-user-maestro.component.html',
  styleUrls: ['./add-user-maestro.component.scss']
})
export class AddUserMaestroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  fb_doctor: FormGroup = this.fb.group({
    name: [''],
    last_name: [''],
    date: [''],
    direction: [''],
    photo: ['']
  })
  onValidation() {

  }
}
