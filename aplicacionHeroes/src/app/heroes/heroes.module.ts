import { AboutComponent } from './pages/about/about.component';
import { HeroTargetComponentComponent } from './components/HeroTargetComponent/HeroTargetComponent.component';
import { MaterialModule } from './../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [AddHeroeComponent, HeroeComponent, HeroesHomeComponent, HeroesListComponent, HeroTargetComponentComponent, ImagenPipe, AboutComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule,
  ]
})
export class HeroesModule { }
