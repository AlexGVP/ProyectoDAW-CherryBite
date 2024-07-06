import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Usuario } from '../../dashboard/mantenimiento/usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private urlApi = 'http://localhost:8080/api/cherry/usuario';

  constructor(private http: HttpClient) {}

  createUsuario(usuario: Usuario): Observable<any> {
    
    const token = sessionStorage.getItem('token');
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.post<Usuario>(this.urlApi, usuario, { headers });
  }
}
