import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product ,ProductDTO,UpdateProductDTO} from '../models/products.model';

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
  update(id:number , dto:UpdateProductDTO){
    return this.http.put<Product>(`${this.url}${id}`,dto)
  }
  //diferencia entre put y patch
  //put: se debe enviar toda la info aunque solo se haya cambiado el titulo
  //patch: solo se envia lo que se desea cambiar
  delete(id:number){
    return this.http.delete<boolean>(`${this.url}${id}`)
  }

  getByPage(limit:number,offset:number){
    return this.http.get<Product[]>(this.url,{
      params:{limit,offset}
    })
  }
}
