import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeDataService } from '../employe-data.service';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-form.component.html',
})
export class UpdateFormComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private DataServie: EmployeDataService,
    private EmpleadosServie: EmployeeServiceService,
  ) {}

  ngOnInit(): void {
    this.empleados = this.DataServie.empleados;

    this.id = this.route.snapshot.params['id'];

    let empleado: Empleado = this.DataServie.getEmployee(this.id);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  editarEmpleado() {
    let uEmployeed = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario,
    );
    try {
      this.DataServie.updateEmployee(this.id, uEmployeed);
      this.goHome();
    } catch (error) {
      console.log(error);
    }
  }

  deleteEmployee(id: number) {
    this.DataServie.deleteEmplpoyee(id);
    this.router.navigate(['']);
  }

  goHome() {
    this.router.navigate(['']);
  }

  id: number;
}
