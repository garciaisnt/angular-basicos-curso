import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>

    <button (click)="acumular(+1)" >+ 1</button>
    <span>{{numero}} </span>

    <button (click)="acumular(-1)" >- 1</button>
       
    `
})
export class ContadorComponent{
    title:string  = 'Contador App';
    numero: number = 0;
  
    acumular(valor:number):void{
       this.numero += valor;
    }
  
}