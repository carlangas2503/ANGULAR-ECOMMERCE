import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  {
  image = ''
  @Input('image')
  set changeImg(newImg:string){
    this.image = newImg
    //code
    // console.log('change just image => ',this.image);

  }
  imageDefault = 'https://thumbs.dreamstime.com/b/cocinar-el-perro-23908657.jpg'
  counter = 0
  counterFun: number | undefined

  eventError(){
    this.image = this.imageDefault
  }
}
