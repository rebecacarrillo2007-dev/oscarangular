import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de alumnos</h2>
    <ul>
      <li *ngFor="let alumno of alumnos">
        {{ alumno.id }} - {{ alumno.name }}
      </li>
    </ul>
  `
})
export class AlumnoComponent implements OnInit {
  alumnos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(datos => {
      this.alumnos = datos;
    });
  }
}
