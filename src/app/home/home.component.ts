import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEmployeeComponent } from '../employee-details/child-employee/child-employee.component';
import { Empleado } from '../empleado.model';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeDataService } from '../employe-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChildEmployeeComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [EmployeDataService, EmployeeServiceService],
})
export class HomeComponent implements OnInit {
  title = 'Directiva Empleados';

  constructor(
    private miService: EmployeeServiceService,
    private DataService: EmployeDataService,
  ) {}

  ngOnInit(): void {
    this.empleados = this.DataService.empleados;
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario,
    );
    //this.miService.showPrompt(`${miEmpleado.nombre} ${miEmpleado.apellido} es ${miEmpleado.cargo} con un salario de ${miEmpleado.salario}k, y esta siendo agregado`)
    this.DataService.addEmployeeService(miEmpleado);
  }
}
