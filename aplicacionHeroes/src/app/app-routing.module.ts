import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/authentication/guards/auth.guard';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () =>import('./core/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path:'heroes',
    loadChildren: () =>import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path:'error',
    component: ErrorComponent
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
