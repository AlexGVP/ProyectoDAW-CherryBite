import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../modelo/login.interface';
import { UsuarioI } from '../modelo/usuario.interface';
import { responseI } from '../modelo/response.interface';
import { ListausuarioI } from '../modelo/listaUsuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8055/apiweb/cherry/usuario";

  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<responseI>{
    let direccion = this.url + "auth";
    return this.http.post<responseI>(direccion,form);
  }

  getAllPatients(page:number):Observable<ListausuarioI[]>{
    let direccion = this.url + "usuario?page=" + page;
    return this.http.get<ListausuarioI[]>(direccion)
  }

  getSinglePatient(id:any):Observable<UsuarioI>{
    let direccion = this.url + "usuario?id=" + id;

    return this.http.get<UsuarioI>(direccion);
  }

  putPatient(form:UsuarioI):Observable<responseI>{
    let direccion = this.url + "usuario";
    return this.http.put<responseI>(direccion, form);
  }


  deletePatient(from:UsuarioI):Observable<responseI>{
    let direccion = this.url + "usuario";
    let Options = {
      headers: new HttpHeaders({
         'Content-type': 'application/json'
      }),
      body:from
    }
    return this.http.delete<responseI>(direccion, Options);
  }


  postPatient(form:UsuarioI):Observable<responseI>{
    let direccion = this.url+ "cherrybite";
    return this.http.post<responseI>(direccion,form);
  }


}
