import { AboutComponent } from './pages/about/about.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path:'',
    component:HeroesHomeComponent,
    children: [
      {
        path:'list',
        component: HeroesListComponent
      },
      {
        path:'about',
        component: AboutComponent
      },
      {
        path:'edit/:id',
        component: AddHeroeComponent
      },
      {
        path:':id',
        component: HeroeComponent
      },
      {
        path:'**',
        redirectTo:'list'
      },
    ]
  }
];
@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HeroesRoutingModule { }
