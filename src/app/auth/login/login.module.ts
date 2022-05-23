import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Componenet Managament
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

//  Router Management
import { RouterModule } from '@angular/router';

//  Forms Managament
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
