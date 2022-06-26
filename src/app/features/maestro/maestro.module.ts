import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestroRoutingModule } from './maestro-routing.module';
import { MaestroComponent } from './maestro.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    MaestroComponent
  ],
  imports: [
    CommonModule,
    MaestroRoutingModule,
    SharedModule,

  ]
})
export class MaestroModule { }
