import { Component, OnInit } from '@angular/core';
import { perro } from './perro';
@Component({
  selector: 'app-gad-shop',
  templateUrl: './gad-shop.component.html',
  styleUrls: ['./gad-shop.component.scss']
})
export class GadShopComponent implements OnInit {

  perros: perro[] = [
    {
      "imagen" : "./assets/img/dog4.jpg",
      "nombre" : "Huesos",
      "edad" : 2,
      "aptoDepto" : true,
      "disponibilidad": true
    },
    {
      "imagen" : "./assets/img/dog4.jpg",
      "nombre" : "Huesos",
      "edad" : 2,
      "aptoDepto" : false,
      "disponibilidad": false
    },
    {
      "imagen" : "./assets/img/dog4.jpg",
      "nombre" : "Huesos",
      "edad" : 2,
      "aptoDepto" : false,
      "disponibilidad": true
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
