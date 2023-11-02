import { Component,Input } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-cards-fav',
  templateUrl: './cards-fav.component.html',
  styleUrls: ['./cards-fav.component.scss']
})
export class CardsFavComponent {
  @Input() product:Product={
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
  activeDetail(){

  }
}
