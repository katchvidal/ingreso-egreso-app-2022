import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../shared/guard/auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    //canActivate : [ AuthGuardGuard ],
    children : [
      {
        path : 'detalle', loadChildren : () => import('./detalle/detalle.module').then( m => m.DetalleModule)
      },
      {
        path : 'estadistica', loadChildren : () => import('./estadisticas/estadisticas.module').then( m => m.EstadisticasModule)
      },
      {
        path : 'ingreso-egreso', loadChildren : () => import('./ingreso-egreso/ingreso-egreso.module').then( m => m.IngresoEgresoModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
