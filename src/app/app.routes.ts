import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienComponent } from './quien/quien.component';
import { ContactoComponent } from './contacto/contacto.component';



export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'proyectos', component:ProyectosComponent},
    {path:'quien', component:QuienComponent},
    {path:'contacto', component: ContactoComponent}
];
