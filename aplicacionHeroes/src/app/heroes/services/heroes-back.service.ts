import { Hero } from './../interfaces/hero.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesBackService {

  private url: string = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.url}heroes`);
  }
  getHeroById(id: string): Observable<Hero>{
    return this.http.get<Hero>(`${this.url}heroes/${id}`);
  }

  getSerchingHeros(stringToSearch: string):Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}heroes?q=${stringToSearch}&_limit=5`);
  }

  addHero(hero: Hero):Observable<Hero>{
    return this.http.post<Hero>(`${this.url}heroes`, hero);
  }
  updateHero(hero: Hero):Observable<Hero>{
    return this.http.put<Hero>(`${this.url}heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<any>{
    return this.http.delete<any>(`${this.url}heroes/${id}`);
  }
}
