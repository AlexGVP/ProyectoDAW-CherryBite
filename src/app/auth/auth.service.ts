
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
interface LoginResponse {
  idusuario: number;
  nomusuario: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/cherry/auth/login';

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<LoginResponse> {
    const formData = new FormData();
    formData.append('usuario', usuario);
    formData.append('password', password);
    return this.http.post<LoginResponse>(this.loginUrl, formData).pipe(
      tap(response => {
        sessionStorage.setItem('idusuario', response.idusuario.toString());
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('isLogged', 'true');
      })
    );
  }

  

  logout():void{
    sessionStorage.clear()    
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged");
  }

}
