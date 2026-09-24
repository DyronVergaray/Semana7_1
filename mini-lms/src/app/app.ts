import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
 nombre: string;
 creditos: number;
 edad: number;
 nota1: number;
 nota2: number;
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
 { nombre: 'María Torres', creditos: 18, edad: 20, nota1: 10, nota2: 15 },
 { nombre: 'Luis Pérez', creditos: 8, edad: 13, nota1: 8, nota2: 2 },
 { nombre: 'Ana Ruiz', creditos: 14, edad: 15, nota1: 15, nota2: 20 }
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

 aprobado(nota1:number,nota2:number): string{
  if((nota1+nota2)/2 > 11){
    return 'Aprobado';
  } else {
    return 'Desaprobado';
  }
 }
}