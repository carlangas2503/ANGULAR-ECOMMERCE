import { Component,OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { FavService } from 'src/app/services/fav/fav.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  counter = 0
  counterFav = 0
  token = ''
  profile:User | null = null
  constructor(
    private auth: AuthService,
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
  getProfile(){
    this.auth.profile(this.token)
    .subscribe(profile=>this.profile = profile)
  }
  login(){
    this.auth.login('carlos@gmail.com','carlos123')
    .subscribe(rta=>{
      this.token = rta.access_token
      this.getProfile()
    })
  }
}
