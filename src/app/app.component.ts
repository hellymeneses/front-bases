import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primeras bases de angular ';
   counter:number=10;

   public incrementa ():void{
    this.counter+=1;
   }
   public decrementa ():void{
    this.counter-=1;
   }
   public reset (): void{
  this.counter=10;
   }
}
