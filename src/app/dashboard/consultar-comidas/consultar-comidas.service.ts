import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultarAlimentor } from './consultar-comidas';

@Injectable({
  providedIn: 'root'
})
export class ConsultarAlimentosService {

  private urlApi = "http://localhost:8080/api/cherry/alimento/consultarAlimentos";

  constructor(private httpClient: HttpClient) { }

  getAllDato(): Observable<ConsultarAlimentor[]> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<ConsultarAlimentor[]>(this.urlApi, { headers });
  }
}