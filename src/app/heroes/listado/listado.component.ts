import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})
export class ListadoComponent {

  heroes: string[] = ['Iroman', 'Benito', 'Superman', 'Don Pepe'];
  eliminado: string = '';


  eliminarHeroe():void{  
    this.eliminado = this.heroes.shift() || '';

  }
  

}
