import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Fornecedor } from '../model/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token ={
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getAllFornecedor(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>('http://localhost:8080/fornecedor', this.token)

    }

    getByIdFornecedor(id:Number): Observable<Fornecedor>{
      return this.http.get<Fornecedor>(`http://localhost:8080/fornecedor/${id}`)
    }

  postFornecedor(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>('http://localhost:8080/fornecedor', fornecedor, this.token)

  }

}
