import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directiva Empleados';

  empleados:Empleado[]=[
    new Empleado("Diego","Palacios","Frontend Developer", 500),
    new Empleado("Enano","David","Chef", 220),
    new Empleado("Bruno Luis","David","Fullstack Developer", 300),
    new Empleado("Lolo","Rodriguez","C# Developer", 350),
    new Empleado("Ulises","Roldan","Backend Developer", 250),
  ]

}
