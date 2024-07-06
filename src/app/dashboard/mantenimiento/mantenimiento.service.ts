import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private urlApi = 'http://localhost:8080/api/cherry/usuario';

  constructor(private http: HttpClient) {}

  listarUsuario(): Observable<Usuario[]> {
    const token = sessionStorage.getItem('token');
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get<Usuario[]>(this.urlApi, { headers });
  }

  buscarusuarioPorId(id: number): Observable<Usuario>{
    const token = sessionStorage.getItem('token');
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.get<Usuario>(this.urlApi+"/"+id, {headers});
  }

  actualizarUsuario(usuario: Usuario):Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    console.log(usuario)
    return this.http.put<Usuario>(this.urlApi +"/"+ usuario.idusuario , usuario, { headers })
  }

  nuevoUsuario(usuario: Usuario):Observable<any>{
    const token = sessionStorage.getItem('token');
    const headers = token ? new HttpHeaders().set('Authorization', `Bearer ${token}`) : undefined;
    return this.http.post<Usuario>(this.urlApi, usuario, { headers });
  }
}