import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado.model';
import { EmployeDataService } from '../employe-data.service';
import { EmployeeServiceService } from '../employee-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent implements OnInit {
  title = 'Form';

  constructor(
    private miService: EmployeeServiceService,
    private DataService: EmployeDataService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.empleados = this.DataService.empleados;
  }

  goHome(): void {
    this.router.navigate(['']);
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
    this.DataService.addEmployeeService(miEmpleado);
  }
}
