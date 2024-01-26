import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { authGuard } from '../guard/auth.guard';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { PreCadastroLoteComponent } from './pre-cadastro-lote/pre-cadastro-lote.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { authChildGuard } from '../guard/auth-child.guard';




const routes: Routes = [
  { 
    
    path: 'home', component: HomeComponent
    
  },
  {
    path: 'cadastro', 
    component: CadastroComponent, canActivate: [authGuard ],
    title: 'cadastro'
  },
  {
    path: 'configuracoes', 
    component: ConfiguracoesComponent, canActivate: [authGuard],
    title: 'configurações'
  },
  {
    path: 'consultas', 
    component: ConsultasComponent, canActivate: [authGuard],
    title: 'Consultas'
  },
  {
    path: 'preCadastro', 
    component: PreCadastroComponent, canActivate: [authGuard],
    title: 'Pré Cadastro'
  },
  //canActivate: [authGuard],
  {
    path: 'preCadastrolote', 
    component: PreCadastroLoteComponent, canActivate: [authGuard],
    title: 'Pré Cadastro em Lotes'
  },
  {
    path: 'relatorios', 
    component: RelatoriosComponent, canActivate: [authGuard],
    title: 'Relatórios'
  },

 


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotasSecundariasModule { }
