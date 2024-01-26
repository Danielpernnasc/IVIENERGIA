import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components Pages
import { MainComponent } from './stage';
import { authChildGuard } from './guard/auth-child.guard';
import { authGuard } from './guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent, ConfiguracoesComponent, ConsultasComponent, PreCadastroComponent, PreCadastroLoteComponent, RelatoriosComponent } from './pages';

//Guards


;



const routes: Routes = [
  { path: '' ,
    redirectTo: '/login',
    pathMatch: 'full',
    
  },
  {
    path: 'login', 
    component: MainComponent, 
    title: 'login',
  },
  // {
  //   path: 'pages',
  //   loadChildren: () => import('./pages/rotas-secundarias.module').then(m=> m.RotasSecundariasModule),
  //   //canActivate: [authGuard],
  //   canActivateChild: [authChildGuard]
  // }
  { 
    
    path: 'home', component: HomeComponent, canActivate: [authGuard ]
    
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
