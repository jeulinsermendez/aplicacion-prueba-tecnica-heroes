import { AddHeroeComponent } from './../add-heroe/add-heroe.component';
import { Hero } from './../../interfaces/hero.interface';
import { HeroesServiceService } from './../heroes-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/core/authentication/service/authentication.service';



@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {



  searchTerm: string = '';
  currentPage: number = 1;
  heros: Hero[] = [];


  constructor(public heroesService: HeroesServiceService,
    public matDialog: MatDialog,
    public authService: AuthenticationService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes();
    this.heroesService.heroes$.subscribe(heros => this.heros = heros);
  }

  ngOnDestroy(): void {
    this.heroesService.destroy.next();
    this.heroesService.destroy.complete();
  }

  search(){
    this.heroesService.getSerchingHeros(this.searchTerm.trim());
   }

   edit(hero: Hero){
    const dialogRef = this.matDialog.open(AddHeroeComponent, {
      data: hero
    });
    dialogRef.afterClosed (). subscribe ( result => {
      if(result){

        this.heroesService.updateHero(result);
      }

    });
   }

   add(){
    const dialogRef = this.matDialog.open(AddHeroeComponent);
    dialogRef.afterClosed (). subscribe ( result => {
      if(result){

        this.heroesService.addHero(result).subscribe(heroToPush => {
          let arrayBackUp = this.heroesService.heroes.getValue();
          let arrayToConcat: Hero[] = [];
          arrayToConcat.push(heroToPush);
          let arrayToNext = arrayToConcat.concat(arrayBackUp);
          this.heroesService.heroes.next(arrayToNext);
        });
      }

      console.log(result);

    });
   }


}
