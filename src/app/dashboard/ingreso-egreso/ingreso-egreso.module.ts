import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoEgresoRoutingModule } from './ingreso-egreso-routing.module';
import { IngresoEgresoComponent } from './ingreso-egreso.component';


@NgModule({
  declarations: [
    IngresoEgresoComponent
  ],
  imports: [
    CommonModule,
    IngresoEgresoRoutingModule
  ]
})
export class IngresoEgresoModule { }
