import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeDataService {

  empleados:Empleado[]=[
    new Empleado("Diego","Palacios","Frontend Developer", 500),
    new Empleado("Enano","David","Chef", 220),
    new Empleado("Bruno Luis","David","Fullstack Developer", 300),
    new Empleado("Lolo","Rodriguez","C# Developer", 350),
    new Empleado("Ulises","Roldan","Backend Developer", 250),
  ];

  addEmploteeService(empleado:Empleado){
    this.empleados.push(empleado);
  }

  constructor() { }
}
