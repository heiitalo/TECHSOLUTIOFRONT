import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token ={
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  
}

getAllProdutos(): Observable<Produto[]>{
  return this.http.get<Produto[]>('http://localhost:8080/produtos', this.token)
}

postProduto(produto: Produto): Observable<Produto>{
  return this.http.post<Produto>('http://localhost:8080/produtos', produto, this.token)
}
}