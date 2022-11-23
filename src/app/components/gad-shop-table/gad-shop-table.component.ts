import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { perro } from './perro';
@Component({
  selector: 'gad-shop-table',
  templateUrl: './gad-shop-table.component.html',
  styleUrls: ['./gad-shop-table.component.scss']
})
export class GadShopTableComponent implements OnInit {

  perros: perro[] = [
    {
      "imagen" : "./assets/img/dog4.jpg",
      "nombre" : "Huesos",
      "edad" : 2,
      "aptoDepto" : true,
      "disponibilidad": true
    },
    {
      "imagen" : "./assets/img/dog.jpg",
      "nombre" : "Hice",
      "edad" : 2,
      "aptoDepto" : false,
      "disponibilidad": false
    },
    {
      "imagen" : "./assets/img/dog3.jpg",
      "nombre" : "Barba",
      "edad" : 2,
      "aptoDepto" : false,
      "disponibilidad": true
    }
  ]

  constructor(private cart: CartServiceService) { 
  }

  ngOnInit(): void {
  }

  cambiarDisponibilidad(perro : perro){
    perro.disponibilidad = !perro.disponibilidad;
    this.cart.addToCart(perro);
  }

}
