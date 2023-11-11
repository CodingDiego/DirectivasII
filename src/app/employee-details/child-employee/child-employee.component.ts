import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../../empleado.model';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-child-employee',
  standalone: true,
  imports: [CommonModule, EmployeeDetailsComponent],
  templateUrl: './child-employee.component.html',
  styleUrl: './child-employee.component.css'
})
export class ChildEmployeeComponent {

  @Input() itemEmpleado:Empleado;
  @Input() indice:number;

  arrayDetails = [''];

  addDetails(newDetails:string){
    this.arrayDetails.push(newDetails);
  }

}
