import { HeroesServiceService } from './../heroes-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
              public heroesServiceService: HeroesServiceService,
              private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id})=> this.heroesServiceService.getHeroeById(id)) )
    .subscribe((hero) =>{
      this.heroesServiceService.hero.next(hero);
    });
  }
  ngOnDestroy(): void {
    this.heroesServiceService.destroy.next();
    this.heroesServiceService.destroy.complete();
  }

  comeBack(){
    this.router.navigate(['/heroes/list']);
  }

}
