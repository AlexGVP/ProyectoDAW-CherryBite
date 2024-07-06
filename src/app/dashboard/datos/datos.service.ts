import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dato } from './dato';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private urlApi = "http://localhost:8080/api/cherry/dato";

  constructor(private httpClient: HttpClient) { }

  getAllDato(): Observable<Dato[]> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<Dato[]>(this.urlApi, { headers });
  }
}