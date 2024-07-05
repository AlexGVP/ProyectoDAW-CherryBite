import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimento } from './alimento';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {
  private apiUrl = 'http://localhost:8055/apiweb/cherry/alimento';

  constructor(private httpClient: HttpClient) { }

  getAllAlimento(): Observable<Alimento[]> {
    return this.httpClient.get<Alimento[]>(this.apiUrl);
  }
}