import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginAlumnoComponent} from "./login-alumno.component";

const routes: Routes = [{path: '', component: LoginAlumnoComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAlumnoRoutingModule { }
