import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Fornecedor } from '../model/Fornecedor';
import { Produto } from '../model/Produto';
import { FornecedorService } from '../service/fornecedor.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor()
  listaFornecedor: Fornecedor[]
  produto: Produto = new Produto()
  idFornecedor: number
  listaProduto: Produto[]

  constructor(
    private router: Router,
    private fornecedorService: FornecedorService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){

     if(environment.token ==''){
       alert('Logue para poder continuar')
       this.router.navigate(['/entrar'])
     }

     this.findAllFornecedor()
     this.getAllProdutos()

     this.fornecedorService.refreshToken
    
  }

findAllFornecedor(){
  this.fornecedorService.getAllFornecedor().subscribe((resp: Fornecedor[]) =>{
    this.listaFornecedor = resp
  })
}

findByIdFornecedor(){
  this.fornecedorService.getByIdFornecedor(this.idFornecedor).subscribe((resp: Fornecedor) =>{
    this.fornecedor = resp
  })
}

  cadastrar(){
    this.fornecedorService.postFornecedor(this.fornecedor).subscribe((resp: Fornecedor) =>{
      this.fornecedor = resp
      alert('Fornecedor cadastrado!')
      this.findAllFornecedor()
      this.fornecedor = new Fornecedor()
    })
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) =>{
this.listaProduto = resp
    })
  }

  cadastrarProduto(){
  this.fornecedor.id = this.idFornecedor
  this.produto.fornecedor = this.fornecedor

  this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
    this.produto = resp
    alert('Produto cadastrado')
  })

  }

}
