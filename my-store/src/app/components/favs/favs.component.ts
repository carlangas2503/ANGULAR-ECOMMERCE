import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { FavService } from 'src/app/services/fav/fav.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent{
  products:Product[] = []
  constructor(
    private favs:FavService
  ){
    this.products = this.favs.getAll()
  }
}
