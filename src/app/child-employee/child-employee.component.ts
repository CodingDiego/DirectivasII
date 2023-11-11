import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-child-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-employee.component.html',
  styleUrl: './child-employee.component.css'
})
export class ChildEmployeeComponent {

  @Input() itemEmpleado:Empleado;
  @Input() indice:number;

  constructor() { }

}
