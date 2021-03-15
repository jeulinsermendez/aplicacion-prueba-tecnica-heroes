import { Hero } from './../interfaces/hero.interface';
import { HeroesBackService } from './../services/heroes-back.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {  takeUntil } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  destroy: Subject<void> = new Subject();
  destroy$ = this.destroy.asObservable();


  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showSpinner$ = this.showSpinner.asObservable();

  heroes: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  heroes$ = this.heroes.asObservable();

  heroesSearching: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  heroesSearching$ = this.heroesSearching.asObservable();

  hero: BehaviorSubject<Hero> = new BehaviorSubject<Hero>({});
  hero$ = this.hero.asObservable();


  constructor(public heroesDataService: HeroesBackService) { }
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  getHeroes(){
    this.showSpinner.next(true);
      this.heroesDataService.getHeroes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(hero => {
        this.heroes.next(hero);
        this.showSpinner.next(false);
      });
  }
  getHeroeById(id: string){
      return this.heroesDataService.getHeroById(id)
  }
  deleteHero(id: string){
      return this.heroesDataService.deleteHero(id).subscribe(any => this.getHeroes());
  }
  addHero(hero: Hero):Observable<Hero>{
    return this.heroesDataService.addHero(hero);
  }
  updateHero(hero: Hero){
   this.heroesDataService.updateHero(hero).subscribe(hero =>{
     this.getHeroes();
   });
  }

  getSerchingHeros(stringToSearch: string){
    this.showSpinner.next(true);
    if(stringToSearch != ''){

      this.heroesDataService.getSerchingHeros(stringToSearch)
      .pipe(takeUntil(this.destroy$))
      .subscribe(heros => {
        this.heroes.next(heros);
        this.showSpinner.next(false);
      });
    }else{
      this.getHeroes();
      this.showSpinner.next(false);
    }
  }
}
