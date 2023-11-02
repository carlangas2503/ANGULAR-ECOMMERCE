import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showFav = false
  @Input()product: Product = {
    id:0,
    title:'',
    price:0,
    images:[],
    description:'',
    category:{
      id:0,
      name:'',
      typeImg:''
    },
    categoryId:0
  }
  @Output() addProd = new EventEmitter<Product>()
  @Output() showProd = new EventEmitter<number>()
  @Output() addToFav = new EventEmitter<Product>()
  @Output() deleteToFav = new EventEmitter<Product>()
  @Output() exist = new EventEmitter<Product>()

  addCar(){
    this.addProd.emit(this.product)
  }
  activeDetail(){
    this.showProd.emit(this.product.id)
  }
  addFav(){
    this.addToFav.emit(this.product)
    this.showFav = !this.showFav
  }
  deleteFav(){
    this.deleteToFav.emit(this.product)
    this.showFav = !this.showFav
  }
}
