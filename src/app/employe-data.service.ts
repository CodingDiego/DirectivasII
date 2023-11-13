import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmployeeServiceService } from './employee-service.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeDataService {
  empleados: Empleado[] = [
    new Empleado('Diego', 'Palacios', 'Frontend Developer', 500),
    new Empleado('Enano', 'David', 'Chef', 220),
    new Empleado('Bruno Luis', 'David', 'Fullstack Developer', 300),
    new Empleado('Lolo', 'Rodriguez', 'C# Developer', 350),
    new Empleado('Ulises', 'Roldan', 'Backend Developer', 250),
  ];

  addEmployeeService(empleado: Empleado) {
    this.ServicioVentanaEmergente.showPrompt(
      'Persona que se va a agregar:' +
        '\n' +
        empleado.nombre +
        '\n' +
        'Salario de ' +
        empleado.salario,
    );
    this.empleados.push(empleado);
  }
  getEmployee(index: number) {
    let empleado: Empleado = this.empleados[index];
    return empleado;
  }

  updateEmployee(id: number, uEmployeed: Empleado) {
    if (
      uEmployeed.nombre &&
      uEmployeed.apellido &&
      uEmployeed.cargo &&
      uEmployeed.salario
    ) {
      this.empleados[id].nombre = uEmployeed.nombre;
      this.empleados[id].apellido = uEmployeed.apellido;
      this.empleados[id].cargo = uEmployeed.cargo;
      this.empleados[id].salario = uEmployeed.salario;
    } else alert('Fields cannot be empty');
  }

  deleteEmplpoyee(id: number) {
    this.empleados.splice(id, 1);
    console.log(this.empleados);
  }

  constructor(private ServicioVentanaEmergente: EmployeeServiceService) {}
}
