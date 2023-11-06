import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    // guards
    loadChildren: () => import('./project/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./project/home/home.module').then(m => m.HomeModule)
  },

  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
