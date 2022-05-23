import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AngularFireAuth : AngularFireAuth
  ) { }

  CreateOneSingleUser( nombre : string, email: string, password: string ){
    this.AngularFireAuth
      .createUserWithEmailAndPassword( email, password )
  }
}
