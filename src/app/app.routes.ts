import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienComponent } from './quien/quien.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UpdateFormComponent } from './update-form/update-form.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'quien', component: QuienComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'update/:id', component: UpdateFormComponent },
];
