import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoEgresoComponent } from './ingreso-egreso.component';

const routes: Routes = [
  { path: '', component: IngresoEgresoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoEgresoRoutingModule { }
