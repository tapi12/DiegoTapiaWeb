import { Component } from '@angular/core';
import { UsuarioService } from '../../src/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService) {}

  onSubmit() {
    this.usuarioService.login(this.email, this.password).subscribe(
      response => {
        alert(response.message);
      },
      error => {
        // Manejar el error del login
        console.error('Error al iniciar sesión', error);
      }
    );
  }
}
