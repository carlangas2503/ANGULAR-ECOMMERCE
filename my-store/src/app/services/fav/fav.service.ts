import { Injectable } from '@angular/core';
import { BehaviorSubject }from 'rxjs'
import { Product } from '../../models/products.model'

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private allProd:Product[] = []
  //                           se le puede poner un tipado
  private myFavs = new BehaviorSubject<Product[]>([])
  //             se crea una instancia       y se crea una instancia inicial
  myFavs$ = this.myFavs.asObservable()

  add(ele:Product){
    if(this.allProd.includes(ele)) return
    this.allProd.push(ele)
    this.myFavs.next(this.allProd)
  }
  getAll(){
    return this.allProd
  }
  delete(ele:Product){
    this.allProd = this.allProd.filter(prod=>prod.id !== ele.id)
    this.myFavs.next(this.allProd)
  }
}
