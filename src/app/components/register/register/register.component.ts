import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsuarioService } from '../../../src/components';
import { Router } from '@angular/router'; // Importa Router si necesitas redirigir después del registro
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  })
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) { // Inyecta UsuarioService
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.mustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const { name, email, password } = this.registerForm.value;

    // Verificar si el usuario existe
    this.usuarioService.verificarUsuario(email).subscribe((respuesta) => {
      if (respuesta.existe) {
        alert('El usuario ya existe');
      } else {
        // Si no existe, crear el nuevo usuario
        this.usuarioService.crearUsuario(name, email, password).subscribe((respuesta) => {
          alert(respuesta.message);
          this.router.navigate(['/login']); // Redirigir a la página de login después de registrarse (ajusta la ruta según tu aplicación)
        }, (error) => {
          alert('Error al crear el usuario: ' + error.message);
        });
      }
    }, (error) => {
      alert('Error al verificar el usuario: ' + error.message);
    });
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
