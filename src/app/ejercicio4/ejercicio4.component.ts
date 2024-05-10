import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.scss'
})
export class Ejercicio4Component {
  calculo = {
    numero: 0,
    camporespuesta: ""
  }

  mostrarResultado = false;

  obtenerResultado(){
    this.calculo.camporespuesta = this.calcularNumeroPerfecto(this.calculo.numero);
    this.mostrarResultado = true;
  }

  calcularNumeroPerfecto(numero: number):string{
    let resultado = "";
    let suma = 0;

    for (let index = 1; index < numero; index++) {
      if ( numero % index == 0){
        suma += index;
      }
    }

    if (suma == numero){
      resultado = "El numero SI es perfecto"
    }

    else {
      resultado = "El numero NO es perfecto"
    }

    return resultado;
  }
}

