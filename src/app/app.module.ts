import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//  Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

//  Enviroment
import { environment } from '../environments/environment';

//  Angular - Firebase Configs
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

//  NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducers';
import { GraphQLModule } from './graphql/modules/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsArray } from './store/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    GraphQLModule,
    HttpClientModule,
    EffectsModule.forRoot( EffectsArray  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
