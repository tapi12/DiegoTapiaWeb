import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'; // Importa 'inject'
import { UsuarioService } from '../../services';
import { Router } from '@angular/router';

// Usa un guardia como función
export const authGuard: CanActivateFn = (route, state) => {
  const usuarioService = inject(UsuarioService); // Inyecta UsuarioService
  const token = usuarioService.getToken(); // Obtiene el token
  const router = inject(Router);
  
  if (token) {
    return true; // Permite el acceso
  } else {
    router.navigate(['/login']);
    return false;  // Bloquea el acceso
  }
};
