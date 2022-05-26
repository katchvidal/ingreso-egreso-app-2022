import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { AuthGraphqlService } from 'src/app/services/auth/auth-graphql.service';
import * as AuthAction from '../../actions'

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.LOAD_AUTH),
      exhaustMap(action =>
        this.authgraphql.login( action.email, action.password).pipe(
          map(userresponse => AuthAction.AUTH_SUCCESS({ userresponse })),
          tap(() => this.router.navigate(['/'])),
          catchError(payload => of(AuthAction.AUTH_FAIL({ payload })))
        )
      )
    )
  );


    constructor(
        private actions$: Actions,
        private authgraphql: AuthGraphqlService,
        private router: Router
    ) { }
}