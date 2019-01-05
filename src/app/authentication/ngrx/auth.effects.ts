import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import 'firebase/auth';
import * as firebase from 'firebase/app';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  authRegister = this.actions$.pipe(

    ofType(AuthActions.TRY_REGISTER),

    map((action: AuthActions.TryRegister) => action.payload),

    switchMap((authData: { email: string, password: string, displayName: string }) => {
      return from(firebase.auth().createUserWithEmailAndPassword(authData.email, authData.password)).pipe(
        switchMap(() => {
          return from(firebase.auth().currentUser.updateProfile({
            displayName: authData.displayName,
            photoURL: null
          }));
        }),
      );
    }),

    switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }),

    mergeMap((token: string) => {
      this.router.navigate(['/']).then();
      return [
        {
          type: AuthActions.REGISTER
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect()
  authLogin = this.actions$.pipe(

    ofType(AuthActions.TRY_LOGIN),

    map((action: AuthActions.TryLogin) => action.payload),

    switchMap((authData: { email: string, password: string }) => {
      return from(firebase.auth().signInWithEmailAndPassword (authData.email, authData.password));
    }),

    switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }),

    mergeMap((token: string) => {
      this.router.navigate(['/']).then();
      return [
        {
          type: AuthActions.LOGIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect({dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      this.router.navigate(['/']).then();
      return from(firebase.auth().signOut());
    }),
  );

  constructor(private actions$: Actions,
              private router: Router) {
  }
}
