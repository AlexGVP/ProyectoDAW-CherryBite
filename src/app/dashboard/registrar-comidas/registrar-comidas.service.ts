import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimento } from './alimento';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleAlimento } from './detalleAlimento';


@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  private urlApi = "http://localhost:8080/api/cherry/alimento";

  constructor(private httpClient: HttpClient) { }

  getAllAlimento(): Observable<Alimento[]> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get<Alimento[]>(this.urlApi, { headers });
  }
  postDetalleAlimento(detalleAlimento:DetalleAlimento): Observable<DetalleAlimento> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.post<DetalleAlimento>("http://localhost:8080/api/cherry/alimento/registrar", detalleAlimento, { headers });
  }
}