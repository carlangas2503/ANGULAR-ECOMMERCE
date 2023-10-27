import { Component , OnInit} from '@angular/core';
import { Product, ProductDTO } from 'src/app/models/products.model';
import { StoreService } from 'src/app/services/store.service';
import { ReqprodService } from 'src/app/services/reqprod.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  detail:Product = {
    id:0,
    title: '',
    images: [],
    price:0,
    description:'',
    category:{
      id:0,
      name:'',
      typeImg:''
    },
    categoryId:0
  }
  showDetail = false
  myShoppingCard: Product[]=[]
  total = 0
  products: Product[] = []
  limit = 10
  offset = 0

  constructor(
    private storeService: StoreService,
    private reqService: ReqprodService
  ){
    this.myShoppingCard = this.storeService.getMyCart()
  }
  ngOnInit(): void {
    this.showMore()
  }
  onAdd(prod:Product){
    this.storeService.onAdd(prod)
    this.total = this.storeService.getTotal()
  }
  clickShowDetai(){
    this.showDetail = false
  }
  onShowDetail(id:number){
    this.reqService.getOneProd(id)
    .subscribe(data=>{
      this.showDetail = true
      this.detail = data
    })
  }
  createProd(){
    const prod:ProductDTO = {
      title:'Border Skate',
      price: 200,
      images:[
        'https://tse2.mm.bing.net/th?id=OIP.cA4rpvFack6kNlt9vpVRRAHaHd&pid=Api&P=0&h=180',
        'https://dealerskateshop.com/wp-content/uploads/2019/09/holiday1.jpg',
        'https://dealerskateshop.com/wp-content/uploads/2019/09/Holidays2.jpg'
      ],
      description:'Skate board',
      categoryId:1
    }
    this.reqService.create(prod)
    .subscribe(data=>{
      console.log(data);
    })
  }
  updtaeProd(){
    this.reqService.update(this.detail.id,{title:'Prueba'})
    .subscribe(data=>{
      const prodIndex = this.products.findIndex(ele => ele.id === this.detail.id)
      this.products[prodIndex] = data
      this.detail = data
    })
  }
  deleteProd(){
    this.reqService.delete(this.detail.id)
    .subscribe(data=>console.log(data))
    this.products = this.products.filter(ele => ele.id !== this.detail.id)
    this.clickShowDetai()
    window.alert(`Producto ${this.detail.title} eliminado con exito`)
  }
  showMore(){
    this.reqService.getByPage(this.limit,this.offset)
    .subscribe(data=>{
      this.products = data
      this.offset += this.limit
    })
  }
}
