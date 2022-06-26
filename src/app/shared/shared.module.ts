import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AddUserMaestroComponent } from './components/add-user-maestro/add-user-maestro.component';
import { AddUserAlumnoComponent } from './components/add-user-alumno/add-user-alumno.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AngularModule} from "./angular/angular.module";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import { ListByAlumnoComponent } from './components/list-by-alumno/list-by-alumno.component';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from "@angular/material/expansion";
import { DashboardAlumnoComponent } from './components/dashboard-alumno/dashboard-alumno.component';
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AddUserMaestroComponent,
    AddUserAlumnoComponent,
    ListByAlumnoComponent,
    DashboardAlumnoComponent
  ],
  exports: [
    AddUserMaestroComponent,
    ListByAlumnoComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    AngularModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    NgChartsModule,
  ]
})
export class SharedModule { }
