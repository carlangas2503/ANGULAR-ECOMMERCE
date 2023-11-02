import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
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
  showDetail=false
  clickShowDetai(){

  }
  updtaeProd(){

  }
  deleteProd(){

  }
  showMore(){

  }
}
