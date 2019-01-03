import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: string;

  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    return this.token != null;
  }

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
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
        this.token = null;
        this.router.navigate(['/']).then();
      })
      .catch(error => {
        console.log(error);
      });
  }

  register(email: string, password: string, displayName: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: displayName,
          photoURL: null
        }).then();
        this.router.navigate(['/recipes']).then();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(token => {
        this.token = token;
      });
    return this.token;
  }
}
