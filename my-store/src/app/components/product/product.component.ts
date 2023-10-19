import { Component,Input,Output,EventEmitter,OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input()product: Product = {
    id:0,
    title:'',
    price:0,
    image:'',
    description:'',
    category:'',
    rating:{}
  }
  @Output() addProd = new EventEmitter<Product>()
  addCar(){
    this.addProd.emit(this.product)
  }
}
