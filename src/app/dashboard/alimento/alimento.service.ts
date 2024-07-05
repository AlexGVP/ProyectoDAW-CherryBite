import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alimento } from './alimento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  constructor(private httpClient: HttpClient) { }

  getAllAlimento():Observable<Alimento[]>{
    return this.httpClient.get<Alimento[]>("http://localhost:8055/apiweb/cherry/alimento");
  }
}
