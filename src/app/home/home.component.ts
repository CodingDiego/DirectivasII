import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEmployeeComponent } from '../employee-details/child-employee/child-employee.component';
import { EmployeDataService } from '../employe-data.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ChildEmployeeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [],
})
export class HomeComponent implements OnInit {
  title = 'Directiva Empleados';

  constructor(private DataService: EmployeDataService) {}

  ngOnInit(): void {
    this.empleados = this.DataService.empleados;
  }

  empleados: Empleado[] = [];
}
