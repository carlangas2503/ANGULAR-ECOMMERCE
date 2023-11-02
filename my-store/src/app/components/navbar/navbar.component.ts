import { Component,OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { FavService } from 'src/app/services/fav/fav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  counter = 0
  counterFav = 0
  constructor(
    private store: StoreService,
    private favs: FavService
  ){

  }
  ngOnInit(): void {
    this.store.myCart$.subscribe(prod => { //para finalizar en el ngOnInit se utiliza el servicio inyectado aplicandole el metodo
      this.counter = prod.length // subscribe para traer la información y poder utilizarla
    })
    this.favs.myFavs$.subscribe(prod=>{
      this.counterFav = prod.length
    })
  }

  changeShowMenu(){
    this.showMenu = !this.showMenu
  }
}
