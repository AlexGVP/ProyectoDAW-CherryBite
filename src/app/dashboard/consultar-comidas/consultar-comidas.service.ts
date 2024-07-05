import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { alimento } from './consultar-comidas';
import { detalle_alimento } from './consultar-comidas';
import { Post } from './consultar-comidas';
import { detalle_post } from './consultar-comidas';

@Injectable({
  providedIn: 'root'
})
export class ConsultarComidasService {

  constructor(private httpClient: HttpClient) { }

  getAllAlimento():Observable<alimento[]>{
    return this.httpClient.get<alimento[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getAllDetalleAlimento():Observable<detalle_alimento[]>{
    return this.httpClient.get<detalle_alimento[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getAllPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getAllDetallePosts():Observable<detalle_post[]>{
    return this.httpClient.get<detalle_post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}