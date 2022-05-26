import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { TYPE_ALERT } from 'src/app/shared/alerts/config.sweetalert';
import { BasicSweetAlert } from 'src/app/shared/alerts/toast.sweetalert';
import * as auth from 'firebase/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data

  constructor(
    private AngularFireAuth: AngularFireAuth,
    private router: Router,
    public AngularFireStore: AngularFirestore, // Inject Firestore service
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    //  Inyecta en el servicio la verificacion si existe un usuario Registrado
    this.AngularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });

  }

    // Sign up with email/password
    SignUp(email: string, password: string, displayName : string ) {
      return this.AngularFireAuth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          /* Call the SendVerificaitonMail() function when new user sign 
          up and returns promise */
          //this.SendVerificationMail();
          const userData: any = {
            uid: result.user?.uid,
            email: result.user?.email,
            displayName,
            photoURL: result.user?.photoURL,
            emailVerified: result.user?.emailVerified,
          };
          this.SetUserData(userData);
          this.router.navigate(['/login'])
        })
        .catch((error) => {
          BasicSweetAlert(TYPE_ALERT.ERROR, 'LOGGIN ERROR', error.message)
        });
    }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    this.AngularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          BasicSweetAlert(TYPE_ALERT.SUCCESS, 'LOGGIN SUCCES FIREBASE', `Bienvenido: ${email}`)
          this.router.navigate(['/']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        BasicSweetAlert(TYPE_ALERT.ERROR, 'LOGGIN ERROR', error.message )
      });
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        BasicSweetAlert(TYPE_ALERT.SUCCESS, 'LOGGIN SUCCES FIREBASE', `Bienvenido: ${res.email}`)
        this.router.navigate(['/']);
      }
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.AngularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        BasicSweetAlert(TYPE_ALERT.ERROR, 'LOGGIN ERROR', error.message );
      });
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.AngularFireStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.AngularFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }

  userAuthenticated() {
    this.AngularFireAuth.authState.subscribe(
      firebaseUser => {
        if (firebaseUser == null) {
          this.router.navigate(['/login'])
        }
      }
    )
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }


    // Reset Forggot password
    ForgotPassword(passwordResetEmail: string) {
      return this.AngularFireAuth
        .sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          BasicSweetAlert(TYPE_ALERT.WARNING, 'RESET PASSWORD', 'Password reset email sent, check your inbox.' );
        })
        .catch((error) => {
          BasicSweetAlert(TYPE_ALERT.ERROR, ' ERROR RESET PASSWORD', error.message );
        });
    }
}
