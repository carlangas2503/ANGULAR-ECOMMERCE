import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { BehaviorSubject }from 'rxjs'

@Injectable({
  providedIn: 'root'
})
//los servicios también se pueden representar como estados globales
export class StoreService {
  private myShoppingCard: Product[]=[]
  private myCart = new BehaviorSubject<Product[]>([]) //se crea la instancia de un estado global

  myCart$ = this.myCart.asObservable() //luego se crea el observador o lo que va a hacer uso de este estado
  constructor() { }

  onAdd(prod:Product){
    this.myShoppingCard.push(prod)
    this.myCart.next(this.myShoppingCard) // por ultimo se aplica el metodo next y se pone lo que se va a enviar en dicha suscripción
    //sigue en el componente nav
  }

  getMyCart(){
    return this.myShoppingCard
  }
  getTotal(){
    return this.myShoppingCard.reduce((sum,ele)=>sum+ele.price,0)
  }
}
