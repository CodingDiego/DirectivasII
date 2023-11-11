import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  @Output() employeeDetails = new EventEmitter<string>();

  //constructor(private miService:EmployeeServiceService){}

  addEmployeeDetails(value: string){
    //this.miService.showPrompt(`se ha agregado "${value}" a las caracteristicas del empleado`)
   this.employeeDetails.emit(value)
  }

  

}
