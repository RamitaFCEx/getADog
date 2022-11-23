import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { perro } from 'src/app/components/gad-shop-table/perro';

@Component({
  selector: 'gad-carro',
  templateUrl: './gad-carro.component.html',
  styleUrls: ['./gad-carro.component.scss']
})
export class GadCarroComponent implements OnInit {

  perros: perro[] = [];

  constructor(private cart: CartServiceService) { 
    cart.carro.subscribe((observable: perro[]) => this.perros = observable)
  }

  ngOnInit(): void {
  }

  

}
