import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.scss'
})
export class Ejercicio2Component {
  anio= 0;
  mostrarResultado = false;
  resultado="";
  
    determinarBisiesto() {
    if ((this.anio % 4 == 0 && this.anio % 100 != 0) || this.anio % 400 == 0) {    
      this.resultado="El año es bisiesto";    
    } else {
      this.resultado="El año no es bisiesto";  
    } 
    this.mostrarResultado = true; }
}
