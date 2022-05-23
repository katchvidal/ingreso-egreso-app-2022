import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit( data : any ){
    this.authService.SignIn( data.email, data.password )
  }

  googleLogin(){
    this.authService.GoogleAuth()
  }
}
