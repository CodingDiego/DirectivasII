import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  @Output() employeeDetails = new EventEmitter<string>();

  addEmployeeDetails(value: string){
    this.employeeDetails.emit(value)
  }

  

}
