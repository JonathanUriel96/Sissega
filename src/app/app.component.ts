import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyCMA1boYaQMVrsbH1xul8iBxfxVQITY0sE",
    authDomain: "sisgega-f38a3.firebaseapp.com",
    databaseURL: "https://sisgega-f38a3.firebaseio.com",
    projectId: "sisgega-f38a3",
    storageBucket: "sisgega-f38a3.appspot.com",
    messagingSenderId: "592315064240",
    appId: "1:592315064240:web:72425d54f9797f80"
  });
}
}
