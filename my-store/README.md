<h1>Conocimientos basicos de Angular<h1>
<h3>Por algunas diferencias de JS con TS ve a al archivo reacpt.ts en la dirección src/app/reacpt.ts<h3>

##  ngIf

Condicional para hacer que se reenderice un componente en caso de que se cumpla un boleando, tambien se le puede agregar un else para que se reenderice otro componente en caso de que no se cumpla, con la siguiente sintaxis:
<br>
***ngIf: "< bonlean >; else < nombre del otro elemento >"**

## ngFor 

se utiliza para hacer map a los elementos que quieras reenderizar, se utiliza en el mismo elemento que quieras que se repita, con la siguiente sintaxis:
<br>
***ngFor:"let < variable que representa cada ele > of < array donde están todos los elemento >**

## ngModel

Es una instancia de angular que se debe activar en el componente app.module.ts de a siguiente forma:
<br>
**import { FormsModule } from '@angular/forms';**
<br>
esta instancia nos permite manipular los inputs con mayor facilidad

## Api request

Al igual que lo anterior es un modulo que se debe activar en angular de la siguiente forma:
<br>
**import { HttpClientModule } from '@angular/common/http'**
<br>
Para utilizarlo es muy facil:
<br>
1. se importa:
<br>
**import { HttpClient } from '@angular/common/http';**
<br>
2. Se inyecta en el constructor
<br>
**constructor(private < nombre que quieres que tenga >:HttpClient){}**
<br>
3. Se ejecuta en la función que lo necesites agregandole el tipo de la petición que necesites: 
<br>
**request  = this.< nombre >.< get, put, post ,delete >(< url >)**
<br>
4. Luego cuando se necesite usar se le apllica el metodo subcribe en donde lo necesites:
<br>
**request.subscribe(ele=>ele)**


## Enviar info de padre a hijo

se utiliza algo llamado Input en el hijo con la siguiente sintaxis:
<br>
@Input(< opcional: el nombre que quieres que tenga>)< nombre prop > = < valor del mismo >
<br>
En caso tal de no ponerle nombre, tendrá el mismo nombre que el de la varible ,recuerda que debes importar esto desde donde se importa el mismo componente y para enviarlo lo más normal es en el componente hijo se aplica esta sistaxis:
<br>
**< nobre-componente [< nombre prop >]="< valor >" ></ nobre-componente >**

## Enviar info del hijo al padre

se utiliza algo llamado Output y EventEmitter los cuales se importan donde está el componente y se usa de la siguiente manera:
<br>
**@Output(< opcional: nombre que quieras que tenga >) < nombre enviante  > = new EventEmitter()**
<br>
Luego en la función encargada de enviar la info se toma el nombre del enviante y se le aplica el metodo emit:
<br>
**this.< nombre enviante >.emit(this.< info a enviar >)**
<br>
Por ultimo en el padre se recibe de la siguiente manera
<br>
**< nobre-componente (< nombre enviante >)="< func para guardar >(< signo pesos >event)" ></ nobre-componente >**

## Ejecutar cosas en componente cuando se crean

se utilizan dos formas, el constructor para cosas no async y el OnInit cuando se tiene algo async, pero recuerda que se debes importar el OnInit desde donde viene el componente, luego en la función constructora ponerle implement, luego poner el nombre y crear la función correspondiente:
<br>
**export class ProductsComponent implements OnInit{ngOnInit():void{< proceso a ejecutar >}}**

## Inyección de dependencias

se crea una dependencia, esto genera que se ejecute un proceso el cual puede ejecutarse desde cualquier lugar, pero sin necesidad de que se le tenga que comunicar entre padre e hios

## Estados globales

tanto para este como para el anterios, cuando se desea usar un serrvicio o un estado global en un componente u en otro servicio se tiene que inyectar la depencia, primero hay que importar el servicio y luego se hace lo siguiente en el constructor de la siguiente forma:
<br>
**constructor(private < nombre que quieres que tenga tu servicio o estado >: < el nombre que importaste >){}**
<br>
Para finalizar, en caso de querer crear un estado global se deben hacer un par de pasos extras:
<br>
1. Se importa "BehaviorSubject" desde rxjs
<br>
2. Se crea una variable que recomendadamente debe ser privada para que sea una instancia de este modulo importado de la siguiente forma:
<br>
**private < nombre var > = new BehaviorSubject< forma que quieras que tenga >( estado incial )**
<br>
3. Se crea el observador, el cual va a ser el que lleve dicha info, procura ponerle el signo pesos al final al final:
<br>
**< nombre obser >< signo pesos > = this.< nombre var >.asObservable()**
<br>
4. Por ultimo a la variable original se le aplica el metodo next y se le pone aquello que se desee enviar:
<br>
**this.< nombre var >.next(< info >)**
<br>
5. Se implementa en el componente que se necesite de aplicandole el metodo subscribe:
<br>
**this.< nombre de tu servicio >.< nombre observador >.subscribe(ele=>ele)**

