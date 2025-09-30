import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Formulario</h2>
    <form>
      <label>Usuario:</label>
      <input type="text" [(ngModel)]="usuario" name="usuario" />
      <br />
      <label>Clave:</label>
      <input type="password" [(ngModel)]="clave" name="clave" />
      <br />
      <button type="button" (click)="verDatos()">Enviar</button>
    </form>
    <p>Datos ingresados: {{ usuario }} - {{ clave }}</p>
  `
})
export class FormComponent {
  usuario = '';
  clave = '';

  verDatos() {
    console.log('Datos del form:', this.usuario, this.clave);
  }
}
