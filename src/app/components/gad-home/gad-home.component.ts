import { Component, OnInit } from '@angular/core';
import { homeImg } from './homeImg';
@Component({
  selector: 'gad-home',
  templateUrl: './gad-home.component.html',
  styleUrls: ['./gad-home.component.css'],
})
export class HomeComponent implements OnInit {
  urlStackblitz: String =
    'https://stackblitz.com/files/angular-ivy-wvdecs/github/RamitaFCEx/getADog/main/src/assets/img/';

  imagenes: homeImg[] = [
    {
      url: this.urlStackblitz + 'dog4.jpg',
      titulo: 'Mejor Alimento Balanceado',
      descripcion: '-Premio DogChow 2022',
    },
    {
      url: this.urlStackblitz + 'dog3.jpg',
      titulo: 'Mejor Shampoo Artesanal',
      descripcion: '-Premio UE 2020',
    },
    {
      url: this.urlStackblitz + 'dog2.jpg',
      titulo: 'Mejores Entrenadores',
      descripcion: '-Premio FIFA 2021',
    },
    {
      url: this.urlStackblitz + 'dog.jpg',
      titulo: 'Premio a la Responsabilidad',
      descripcion: '-Revista TIME 2022',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
