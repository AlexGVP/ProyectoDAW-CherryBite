import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia } from './noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private urlApi = "http://localhost:8080/api/cherry/noticia";

  constructor(private httpClient: HttpClient) { }

  getAllNoticia(): Observable<Noticia[]> {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get<Noticia[]>(this.urlApi, { headers });
  }
}