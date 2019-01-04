import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as AuthActions from './ngrx/auth.actions';
import * as fromApp from '../ngrx/app.reducers';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router,
              private store: Store<fromApp.AppState>) {}

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.Login());

        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.store.dispatch(new AuthActions.SetToken(token));
          });

        this.router.navigate(['/recipes']).then();
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.store.dispatch(new AuthActions.Logout());

        this.router.navigate(['/']).then();
      })
      .catch(error => {
        console.log(error);
      });
  }

  register(email: string, password: string, displayName: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.Register());

        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.store.dispatch(new AuthActions.SetToken(token));
          });

        firebase.auth().currentUser.updateProfile({
          displayName: displayName,
          photoURL: null
        }).then();

        this.router.navigate(['/recipes']).then();
      })
      .catch(error => {
        console.log(error);
      });
  }
}
