import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin
  usuario: Usuario = new Usuario
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
  }

confirmSenha(event: any){
this.confirmarSenha = event.target.value
}

cadastrar(){

  if(this.usuario.senha != this.confirmarSenha ){
    alert('Senhas diferentes.')

  } else{
    this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      alert('Usuario cadastrado')
    })

  }

}

entrar(){
  this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
    this.usuarioLogin = resp

environment.token = this.usuarioLogin.token
environment.nome = this.usuarioLogin.nome

console.log(environment.token)



    this.router.navigate(['/inicio'])
  }, erro =>{
    if(erro.status == 500){
      alert('Usuario ou senha incorretos')
    }
  })
}


}
