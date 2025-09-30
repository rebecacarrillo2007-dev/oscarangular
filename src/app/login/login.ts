import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <label>Email:</label>
      <input type="text" formControlName="email" />
      <div *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
        Ingresa el usuario
      </div>

      <label>Password:</label>
      <input type="password" formControlName="password" />
      <div *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
        Ingresa la contraseña
      </div>

      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>

    <p *ngIf="loginError" style="color:red;">Usuario o contraseña incorrectos</p>
    <p *ngIf="loginSuccess" style="color:green;">¡Login exitoso!</p>
  `
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError = false;
  loginSuccess = false;

  private readonly USER = 'admin';
  private readonly PASSWORD = 'admin123';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    if (email === this.USER && password === this.PASSWORD) {
      this.loginError = false;
      this.loginSuccess = true;
    } else {
      this.loginError = true;
      this.loginSuccess = false;
    }
  }
}
