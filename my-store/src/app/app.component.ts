import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  image = ''
  showCount = true
  alt=''
  token = ''
  toggleCount(){
    this.showCount = !this.showCount
  }
  constructor(
    private auth:AuthService,
    private users:UsersService
  ){}

  createUser(){
    this.users.create({
      name:'carlos',
      email:'carlos@gmail.com',
      password:'carlos123'
    })
  }
  // imagen = 'https://source.unsplash.com/random'
  // btDes = true
  // name='Carlos'
  // age=20
  // box = {
  //   hancho:100,
  //   alto:100,
  //   color:'#ff0000'
  // }
  // register = {
  //   name:'',
  //   email:'',
  //   password:''
  // }
  // toogleButton(){
  //   this.btDes = !this.btDes
  // }
  // aumentAge(){
  //   if(this.age >= 100) return
  //   this.age +=1
  // }
  // onScroll(event: Event){
  //   const ele = event.target as HTMLElement
  //   console.log(ele.scrollTop);
  // }
  // onChange(event:Event){
  //   const ele = event.target as HTMLInputElement
  //   this.name = ele.value

  // }
  // emojis = [ '😂' , '🐦', '🐳','🌮', '💚']
  // names:string[] = ['carlos','maria','juan','diego','miguel']// esta es la forma en la que se demonica que un array solo puede ser de un tipo
  // newName=''
  // addName(){
  //   if(this.newName == '') return
  //   this.names.push(this.newName)
  //   this.newName = ''
  // }
  // deletName(i:number){
  //   this.names.splice(i,1)
  // }
  // onRegister(){
  //   console.log(this.register);

  // }
  // products:Product[] = [
  //   {
  //     name: 'EL mejor juguete',
  //     price: 565,
  //     image: 'https://source.unsplash.com/random',
  //     category: 'Kids'
  //   },
  //   {
  //     name: 'Bicicleta casi nueva',
  //     price: 356,
  //     image: 'https://source.unsplash.com/random'
  //   },
  //   {
  //     name: 'Colleción de albumnes',
  //     price: 34,
  //     image: 'https://source.unsplash.com/random'
  //   },
  //   {
  //     name: 'Mis libros',
  //     price: 23,
  //     image: 'https://source.unsplash.com/random'
  //   },
  //   {
  //     name: 'Casa para perro',
  //     price: 34,
  //     image: 'https://source.unsplash.com/random'
  //   },
  //   {
  //     name: 'Gafas',
  //     price: 3434,
  //     image: 'https://source.unsplash.com/random'
  //   }
  // ]
}
