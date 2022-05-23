import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit( data : any ){
    console.log(data );
    //this.authService.createanUser( data.nombre, data.email, data.password )
    
  }
}
