import { Routes } from '@angular/router';
 
export const routes: Routes = [

  { 
    path: '', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'cadastro', 
    loadComponent: () => import('./cadastro/cadastro.component').then(m => m.CadastroComponent) 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) 
  },

  
  { 
    path: 'layout', 

    loadComponent: () => import('./template/template.component').then(m => m.TemplateComponent),
    
 
    children: [
      {
        path: '',
        loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
      },
      {
        path: 'propriedades',
        loadComponent: () => import('./dashboard/propriedades/propriedades.component').then(m => m.PropriedadesComponent)
      },
      {
        path: 'cultivos', 
        loadComponent: () => import('./dashboard/cultivos/cultivos.component').then(m => m.CultivosComponent)
      },
      
      {
        path: 'praticas',
        loadComponent: () => import('./gestao/praticas/praticas.component').then(m => m.PraticasComponent)
      },
      {
        path: 'intervencoes', 
        loadComponent: () => import('./gestao/intervencoes/intervencoes.component').then(m => m.IntervencoesComponent)
      },
      {
        path: 'acompanhamento', 
        loadComponent: () => import('./gestao/acompanhamento/acompanhamento.component').then(m => m.AcompanhamentoComponent)
      },

      {
        path: 'sms', 
        loadComponent: () => import('./alertas/sms/sms.component').then(m => m.SmsComponent)
      },
      {
        path: 'alerta-risco', 
        loadComponent: () => import('./alertas/alerta-risco/alerta-risco.component').then(m => m.AlertaRiscoComponent)
      },

      { path: 'galeria', 
        loadComponent: () => import('./galeria/galeria.component').then(m => m.GaleriaComponent) 

      }
    ]
  },

];