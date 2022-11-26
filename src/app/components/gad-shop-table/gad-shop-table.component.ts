import { Component, OnInit } from '@angular/core';
import { DogsApiService } from '../../services/dogs-api.service';
import { CartServiceService } from '../../services/cart-service.service';
import { perro } from '../../model/perro';
@Component({
  selector: 'gad-shop-table',
  templateUrl: './gad-shop-table.component.html',
  styleUrls: ['./gad-shop-table.component.scss']
})
export class GadShopTableComponent implements OnInit {
  tablaCargada: boolean = false;
  urlStackblitz : String = "https://stackblitz.com/files/angular-ivy-wvdecs/github/RamitaFCEx/getADog/main/src/assets/img/";

  perros: perro[] = [
    {
      "id" : 88888,
      "imagen" : this.urlStackblitz + "dog4.jpg",
      "nombre" : "Huesos",
      "edad" : 2,
      "aptoDepto" : true
    },
    {
      "id" : 88881,
      "imagen" : this.urlStackblitz + "dog.jpg",
      "nombre" : "Hice",
      "edad" : 2,
      "aptoDepto" : false
    },
    {
      "id" : 88883,
      "imagen" : this.urlStackblitz + "dog3.jpg",
      "nombre" : "Barba",
      "edad" : 2,
      "aptoDepto" : false
    }
  ];


  perrosApi: perro[] = [];

  constructor(private cart: CartServiceService,
              private dogsApi: DogsApiService) { 
  }

  ngOnInit(): void {
    this.tablaCargada = false;
    this.dogsApi.findAll().subscribe(res => {
      this.perrosApi = res as perro[];
      this.tablaCargada = true;
    });
  }

  cambiarDisponibilidad(perro : perro){
    this.cart.addToCart(perro);
    document.getElementById(perro.id.toString())?.classList.toggle("seleccionado");
  }

  

}
