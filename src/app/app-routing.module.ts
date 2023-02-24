import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/secure/secure.module').then(m => m.SecureModule),
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/public/signin/signin.module').then(m => m.SigninPageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/public/signup/signup.module').then(m => m.SignupPageModule),
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/public/password-reset/password-reset.module').then(m => m.PasswordResetPageModule),
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
