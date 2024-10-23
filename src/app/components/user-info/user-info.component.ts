import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../src/components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  usuario: any = null;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerPerfilUsuario();
  }

  obtenerPerfilUsuario() {
    this.usuarioService.getPerfilUsuario().subscribe(
      (data) => {
        this.usuario = data; // Almacena la información del usuario
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario', error);
      }
    );
  }
}