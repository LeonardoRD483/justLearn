import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout-alumnos/main-layout.component';
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { MainLayoutMaestroComponent } from './layout/main-layout-maestro/main-layout-maestro.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    MainLayoutMaestroComponent
  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class CoreModule { }
