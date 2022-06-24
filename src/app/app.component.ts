import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postTexts = [
    'I am a toxic spider!',
    'Live colored',
    'At home',
    'Profile',
  ]
  postImages = [
    'assets/img/pets/1.jpg',
    'assets/img/pets/2.jpg',
    'assets/img/pets/3.jpg',
    'assets/img/pets/4.jpg'
  ];
}
