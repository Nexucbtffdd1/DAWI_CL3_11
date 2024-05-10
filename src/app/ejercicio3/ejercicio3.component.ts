import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.scss'
})
export class Ejercicio3Component {
  calificaciones= {
    calificacion1: 0,
    calificacion2: 0,
    calificacion3: 0,
    resultado: 0

  }
  mostrarResultado = false;
  mensaje: string ='';

  calcularResultado() {
    this.calificaciones.resultado = (Number(this.calificaciones.calificacion1) + Number(this.calificaciones.calificacion2) + Number(this.calificaciones.calificacion3))/3;
    if (this.calificaciones.resultado >= 70) {
      this.mensaje = 'Aprobado';
    } else {
      this.mensaje = 'Reprobado';
    }
    this.mostrarResultado = true;
  }
}
