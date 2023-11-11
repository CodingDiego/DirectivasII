import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChildEmployeeComponent } from './child-employee/child-employee.component';
import { Empleado } from './empleado.model';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ChildEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeServiceService]
})
export class AppComponent {
  title = 'Directiva Empleados';

  constructor(private miService:EmployeeServiceService) { }

  empleados:Empleado[]=[
    new Empleado("Diego","Palacios","Frontend Developer", 500),
    new Empleado("Enano","David","Chef", 220),
    new Empleado("Bruno Luis","David","Fullstack Developer", 300),
    new Empleado("Lolo","Rodriguez","C# Developer", 350),
    new Empleado("Ulises","Roldan","Backend Developer", 250),
  ];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;


  agregarEmpleado(){

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miService.showPrompt(`${miEmpleado.nombre} ${miEmpleado.apellido} es ${miEmpleado.cargo} con un salario de ${miEmpleado.salario}k, y esta siendo agregado`)
    this.empleados.push(miEmpleado);
  }
}
