import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-form.component.html',
})
export class UpdateFormComponent {
  constructor(private router: Router) {}

  empleados: Empleado[] = [];

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;

  editarEmpleado() {}

  goHome() {
    this.router.navigate(['']);
  }
}
