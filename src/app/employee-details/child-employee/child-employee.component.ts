import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../empleado.model';
import { EmployeeDetailsComponent } from '../employee-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-child-employee',
  standalone: true,
  imports: [CommonModule, EmployeeDetailsComponent, RouterModule],
  templateUrl: './child-employee.component.html',
  styleUrl: './child-employee.component.css',
})
export class ChildEmployeeComponent {
  @Input() itemEmpleado: Empleado;
  @Input() indice: number;

  arrayDetails = [''];

  addDetails(newDetails: string) {
    this.arrayDetails.push(newDetails);
  }
}
