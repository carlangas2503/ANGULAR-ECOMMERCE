import { Component , OnInit} from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { StoreService } from 'src/app/services/store.service';
import { ReqprodService } from 'src/app/services/reqprod.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  myShoppingCard: Product[]=[]
  total = 0
  products: Product[] = []

  constructor(
    private storeService: StoreService,
    private reqService: ReqprodService
  ){
    this.myShoppingCard = this.storeService.getMyCart()
  }
  ngOnInit(): void {
    this.reqService.getAllProd()
    .subscribe(data=>{
      console.log(data);

      this.products = data
    })
  }

  onAdd(prod:Product){
    this.storeService.onAdd(prod)
    this.total = this.storeService.getTotal()
  }



}
