import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/home"> Home</a> |
      <a routerLink="/alumno/1/Juan"> Alumno</a> |
      <a routerLink="/api"> API</a> |
      <a routerLink="/form"> Formulario</a> |
      <a routerLink="/login"> Login </a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
