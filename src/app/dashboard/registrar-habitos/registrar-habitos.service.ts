import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habito } from './habito';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HabitoService {

  private urlApi = "http://localhost:8080/api/cherry/habito";

  constructor(private httpClient: HttpClient) { }

  getAllHabito(): Observable<Habito[]> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get<Habito[]>(this.urlApi, { headers });
  }
}