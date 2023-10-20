import { Component,OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  counter = 0

  constructor(
    private store: StoreService
  ){

  }
  ngOnInit(): void {
    this.store.myCart$.subscribe(prod => { //para finalizar en el ngOnInit se utiliza el servicio inyectado aplicandole el metodo
      this.counter = prod.length // subscribe para traer la información y poder utilizarla
    })
  }

  changeShowMenu(){
    this.showMenu = !this.showMenu
  }
}
