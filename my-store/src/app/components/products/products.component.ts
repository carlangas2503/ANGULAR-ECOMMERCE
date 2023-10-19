import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCard: Product[]=[]
  total = 0

  onAdd(prod:Product){
    this.myShoppingCard.push(prod)
    this.total = this.myShoppingCard.reduce((sum,ele)=>sum+ele.price,0)
  }


  products: Product[] = [
    {
      id:1,
      name:'Perrito Cocinero',
      price:11,
      image:'http://i.huffpost.com/gen/2686234/images/o-CUTE-DOG-COOKING-VIDEO-facebook.jpg'
    },
    {
      id:2,
      name:'Perrito Pintor',
      price:12,
      image:'https://tse4.mm.bing.net/th?id=OIP.ony6MJ4MpVzeAaUReZOeXwHaEK&pid=Api&P=0&h=180'
    },
    {
      id:3,
      name:'Perrito Futbolista',
      price:13,
      image:'https://i.pinimg.com/originals/a3/43/2c/a3432c23b02559820dba08772e8fc26c.jpg'
    },
    {
      id:4,
      name:'Perrito Oficial',
      price:14,
      image:'https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/disfraz-para-perros-policia.jpg'
    },
    {
      id:5,
      name:'Perrito Oficial',
      price:14,
      image:'https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/disfraz-para-perros-policia.jpg'
    },
    {
      id:6,
      name:'Perrito Oficial',
      price:14,
      image:'https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/disfraz-para-perros-policia.jpg'
    },
    {
      id:7,
      name:'Perrito Oficial',
      price:14,
      image:'https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/disfraz-para-perros-policia.jpg'
    },
    {
      id:8,
      name:'Perrito Oficial',
      price:14,
      image:'https://www.perrosamigos.com/Uploads/perrosamigos.com/ImagenesGrandes/disfraz-para-perros-policia.jpg'
    }
  ]
}
