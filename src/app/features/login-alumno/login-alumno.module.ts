import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAlumnoRoutingModule } from './login-alumno-routing.module';
import { LoginAlumnoComponent } from './login-alumno.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoginAlumnoComponent
  ],
  imports: [
    CommonModule,
    LoginAlumnoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule
  ]
})
export class LoginAlumnoModule { }
