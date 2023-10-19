import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
//los servicios también se pueden representar como estados globales
export class StoreService {
  private myShoppingCard: Product[]=[]

  constructor() { }

  onAdd(prod:Product){
    this.myShoppingCard.push(prod)
  }

  getMyCart(){
    return this.myShoppingCard
  }
  getTotal(){
    return this.myShoppingCard.reduce((sum,ele)=>sum+ele.price,0)
  }
}
