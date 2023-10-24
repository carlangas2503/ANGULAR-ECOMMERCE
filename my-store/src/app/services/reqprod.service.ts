import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product ,ProductDTO} from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ReqprodService {
  url = 'https://young-sands-07814.herokuapp.com/api/products/'
  constructor(
    private http:HttpClient
  ) { }

  getAllProd(){
    return this.http.get<Product[]>(this.url)
  }
  getOneProd(id:number){
    return this.http.get<Product>(`${this.url}${id}`)
  }
  create(dto: ProductDTO){
    return this.http.post<Product>(this.url,dto)
  }
}
