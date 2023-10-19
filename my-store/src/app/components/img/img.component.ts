import { Component,Input,OnInit ,OnDestroy,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnDestroy,OnChanges {
  image = ''
  @Input('image')
  set changeImg(newImg:string){
    this.image = newImg
    //code
    console.log('change just image => ',this.image);

  }
  @Input()alt = ''
  imageDefault = 'https://thumbs.dreamstime.com/b/cocinar-el-perro-23908657.jpg'
  counter = 0
  counterFun: number | undefined
  constructor(){
    console.log('contructor');
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log('OnChanges');
    console.log('changes =>',changes);
  }
  ngOnInit(): void {
    //before render
    console.log('OnInit');
    // this.counterFun = window.setInterval(()=>{
    //   this.counter +=1
    //   console.log('run counter');
    // },1000)
  }
  ngOnDestroy(): void {
    //delete component
    console.log('ngDestroy');
    //window.clearInterval(this.counterFun)
  }
  eventError(){
    this.image = this.imageDefault
  }
}
