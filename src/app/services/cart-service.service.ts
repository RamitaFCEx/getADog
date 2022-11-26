import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { perro } from '../model/perro';

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
      let index: number;
      for (const iterator of this.__adoptList) {
        if(iterator.nombre == perro.nombre){
          index = this.__adoptList.indexOf(iterator);
          this.__adoptList.splice(index, 1);
        }
      }
    }
    this.carro.next(this.__adoptList);
  }

  clearCart(){
    console.log("Vaciar carro");
    this.__adoptList.splice(0);
  }

}
