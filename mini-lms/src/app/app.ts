import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
 nombre: string;
 creditos: number;
 edad: number;
}
@Component({
 selector: 'app-root',
 imports: [CommonModule],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {
 titulo = 'Mini-LMS · Lista de estudiantes';
 estudiantes: Estudiante[] = [
 { nombre: 'María Torres', creditos: 18, edad: 20 },
 { nombre: 'Luis Pérez', creditos: 8, edad: 13 },
 { nombre: 'Ana Ruiz', creditos: 14, edad: 15 }
 ];
 
 estado(creditos: number): string {
 if (creditos < 1 || creditos > 24) {
 return 'Créditos inválidos';
 } else if (creditos >= 12) {
 return 'Matriculado';
 }
 return 'Pendiente';
 }

 validar(edad: number): string{
  if(edad > 17){
    return 'Adulto';
  } else {
    return 'Menor';
  }
 }
}