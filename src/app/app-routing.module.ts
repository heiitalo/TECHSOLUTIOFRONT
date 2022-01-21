import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent },
  {path: 'inicio', component: InicioComponent},
  {path: 'fornecedor1', component: FornecedorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
