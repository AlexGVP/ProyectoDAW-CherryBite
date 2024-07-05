import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class registrarComidasService {
  private apiUrl = "http://localhost:8055/apiweb/cherry/alimento"  
  constructor(private http: HttpClient) { }

  getAlimento(): Observable<any>{
    let url = `${this.apiUrl}?completed=true`
    return this.http.get<any[]>(url)
  }
}