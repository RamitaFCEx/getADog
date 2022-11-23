import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { perro } from 'src/app/components/gad-shop-table/perro';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private __adoptList: perro[] = [];
  carro: BehaviorSubject<perro[]> = new BehaviorSubject(this.__adoptList);
  //public alCarro: Observable<perro[]> = this.carro.asObservable();
  constructor() { }

  addToCart(perro: perro){
    let item = this.__adoptList.find((v1) => v1.nombre == perro.nombre);
    if (!item) {
      this.__adoptList.push({... perro});
    }else{
      this.__adoptList.pop();
    }
    
    this.carro.next(this.__adoptList);
  }
}
