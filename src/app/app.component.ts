import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
        apiKey: 'AIzaSyC_M_5s61MkA6Ja1k809BO1EDyguizNKMo',
        authDomain: 'recipes-angularapp.firebaseapp.com',
        databaseURL: 'https://recipes-angularapp.firebaseio.com',
        projectId: 'recipes-angularapp',
        storageBucket: 'recipes-angularapp.appspot.com',
        messagingSenderId: '639514708055'
    });
  }
}
