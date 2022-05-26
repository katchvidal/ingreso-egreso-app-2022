import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppState } from 'src/app/store/app.reducers';
import * as authAction from '../../store/actions'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit( data : any ){
    //this.authService.SignIn( data.email, data.password )
    this.store.dispatch(authAction.LOAD_AUTH({ email: data.email, password: data.password }))
  }

  googleLogin(){
    this.authService.GoogleAuth()
  }
}
