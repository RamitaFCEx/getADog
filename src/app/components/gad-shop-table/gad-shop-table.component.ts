import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { perro } from './perro';
@Component({
  selector: 'gad-shop-table',
  templateUrl: './gad-shop-table.component.html',
  styleUrls: ['./gad-shop-table.component.scss']
})
export class GadShopTableComponent implements OnInit {

  perros: perro[] = [
    {
      "id" : 1,
      "imagen" : "./assets/img/dog4.jpg",
      "nombre" : "Huesos",
      "edad" : 2,
      "aptoDepto" : true
    },
    {
      "id" : 2,
      "imagen" : "./assets/img/dog.jpg",
      "nombre" : "Hice",
      "edad" : 2,
      "aptoDepto" : false
    },
    {
      "id" : 3,
      "imagen" : "./assets/img/dog3.jpg",
      "nombre" : "Barba",
      "edad" : 2,
      "aptoDepto" : false
    }
  ]

  constructor(private cart: CartServiceService) { 
  }

  ngOnInit(): void {
  }

  cambiarDisponibilidad(perro : perro){
    this.cart.addToCart(perro);
    document.getElementById(perro.id.toString())?.classList.toggle("seleccionado");
  }

}
