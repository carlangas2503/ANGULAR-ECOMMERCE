import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ReqprodService {

  constructor(
    private http:HttpClient
  ) { }

  getAllProd(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
}
