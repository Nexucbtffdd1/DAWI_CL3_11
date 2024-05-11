import { Routes } from '@angular/router';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';

export const routes: Routes = [
    {path: 'ejercicio3', component: Ejercicio3Component},
    {path: 'ejercicio1', component: Ejercicio1Component},
    {path: 'ejercicio4', component: Ejercicio4Component},
    {path: 'ejercicio2', component: Ejercicio2Component}
];
