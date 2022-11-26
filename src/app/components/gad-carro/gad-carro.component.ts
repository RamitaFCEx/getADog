import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { perro } from '../../model/perro';
import { DogsApiService } from 'src/app/services/dogs-api.service';

@Component({
  selector: 'gad-carro',
  templateUrl: './gad-carro.component.html',
  styleUrls: ['./gad-carro.component.scss']
})
export class GadCarroComponent implements OnInit {

  perros: perro[] = [];

  constructor(private cart: CartServiceService, private dogsApi: DogsApiService) { 
    cart.carro.subscribe((observable: perro[]) => this.perros = observable)
  }

  ngOnInit(): void {
    this.cart.clearCart();
  }

  adoptar(){
    this.perros.forEach(perro => {
      this.dogsApi.deleteById(perro.id);
    });
  }

  

}
