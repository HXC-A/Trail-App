import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'trails/laguna',
    loadChildren: () => import('./trails/laguna/laguna.module').then( m => m.LagunaPageModule)
  },
  {
    path: 'trails/jost',
    loadChildren: () => import('./trails/jost/jost.module').then( m => m.JostPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
