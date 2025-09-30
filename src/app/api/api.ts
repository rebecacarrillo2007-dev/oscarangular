import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de alumnos desde la API</h2>
    <table border="1" cellpadding="5">
      <tr>
        <th>Nombre</th>
        <th>Avatar</th>
      </tr>
      <tr *ngFor="let item of data">
        <td>{{ item.name }}</td>
        <td><img [src]="item.avatar" width="80" height="80" /></td>
      </tr>
    </table>
  `
})
export class ApiComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(datos => {
      this.data = datos;
    });
  }
}
