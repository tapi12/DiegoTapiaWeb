import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la aplicación
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // Ajusta la URL según tu API

  constructor(private http: HttpClient) { }

  verificarUsuario(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/existe`, { email });
  }
  
  crearUsuario(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear`, { name, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token); // Guardar token en localStorage
        localStorage.setItem('username', response.name); // Guardar nombre en localStorage
      })
    );
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username'); // Borrar el nombre también
  }
  
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getPerfilUsuario(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/perfil`, {
      headers: { Authorization: `Bearer ${this.getToken()}` }
    });
  }

  isLoggedIn(): boolean {
    return !!this.getToken(); // Comprueba si existe un token en localStorage
  }
}
