import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable, Subject, tap } from 'rxjs';
//import { REGISTER_USER_MUTATION } from 'src/app/@graphql/operation/mutation/auth/user';
//import { AUTH_TOKEN_QUERY } from 'src/app/@graphql/operation/query/auth/getUser';
import { LOGIN_QUERY } from '../../graphql/operations/queries/auth/login.query';
import { ApiService } from '../../graphql/services/api.service';
//import { IMeData, ISession } from '../interfaces/session/session.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGraphqlService extends ApiService {

  //TODO: SUBSCRIPCION ACTIVA DE USUARIO
  // accessUser = new Subject<IMeData>();
  // accessUser$ = this.accessUser.asObservable()

  constructor(apollo: Apollo, private router: Router) {
    super(apollo)
  }

  login(email: string, password: string) {
    return this.get(LOGIN_QUERY, { email, password, include: false }).pipe(
      map((result: any) => {  
        return result.SignIn
        // if( result ){
        //   this.router.navigate(['/'])
        //   return result.SignIn
        // }
      }),
      // tap(() => this.router.navigate(['/']))
      
    )
  }

  // getMe( include : boolean ) {
  //   return this.get(AUTH_TOKEN_QUERY,
  //     {
  //       include
  //     },
  //     {
  //       headers: new HttpHeaders({
  //         Authorization: (this.getSession() as ISession ).token || ''
  //       })
  //     }).pipe(
  //       map((result: any) => { return result.auth })
  //     )
  // }

  // register( user : any , include : boolean ){
  //   return this.set(REGISTER_USER_MUTATION, {  user, include })
  //   .pipe( map((result : any ) => { return result.createUser }))
  // }

  // // TODO: Handle Session Auth User
  // setSession( token : string, expiresTimeinHours = 24 ){

  //   const date = new Date(); 
  //   date.setHours( date.getHours() + expiresTimeinHours )
  //   const session : ISession = {
  //     expiresIn: new Date( date ).toISOString(),
  //     token
  //   };
  //    localStorage.setItem('session', JSON.stringify(session))
  // }

  // // TODO: Get Session Auth User
  // getSession() : ISession {
  //   return JSON.parse( localStorage.getItem('session')! )
  // }

  // // TODO: Limpiar Storage
  // removeSession(){
  //   localStorage.removeItem('session')
  //   this.updateSession({ status: false })
  // }

  // //TODO: Checar si Hay Session con Token Correcta Activa 24/7
  // checkAuthSession(){
  //   if( this.getSession() !== null ){
  //     this.getMe( false ).subscribe(
  //       (res : IMeData ) => {
  //         if( !res.status ){
  //           this.removeSession()
  //           return
  //         }

  //         this.updateSession( res );
  //       });
  //     console.log('Session Iniciada con Token Valido Activo ');   
  //     return
  //   }
  //   this.updateSession({
  //     status: false,
  //     message : 'Token No Valido / Token expired / Something Went Wrong'
  //   })
  //   console.log('sesion no iniciada');
    
  // }

  // //  TODO: Update Session With Observable
  // updateSession( value : IMeData ){
  //   this.accessUser.next( value )
  // }
}