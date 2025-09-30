import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AlumnoComponent } from './alumno/alumno';
import { ApiComponent } from './api/api';
import { FormComponent } from './form/form';
import { LoginComponent } from './login/login'; 

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'alumno/:id/:nombre', component: AlumnoComponent },
  { path: 'api', component: ApiComponent },
  { path: 'form', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
