import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.scss'
})
export class Ejercicio1Component {
  calculo = {
    precioxarticulo: 0,
    cantidad: 0,
    precio:0,
    camporespuesta: ""
  }

  mostrarResultado = false;

  calcularPrecio(){
    this.calculo.precio = Number(this.calculo.precioxarticulo) * Number(this.calculo.cantidad);
    this.calculo.camporespuesta = this.calcularDescuento(this.calculo.precio, this.calculo.cantidad);
    this.mostrarResultado = true;
  }

  calcularDescuento(precio: number, cantidad:number):string{
    let resultado = "";
    if(cantidad >= 20){
      resultado = "El precio por la compra es: " + (precio - (precio * 0.10));
    }else if (cantidad < 20 && cantidad >10){
      resultado = "El precio por la compra es: " + (precio - (precio * 0.05));
    }else
      resultado = "El precio por la compra es: " + precio;
    return resultado;
  }
}
