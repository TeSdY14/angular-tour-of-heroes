import {Injectable} from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroesParent(): Observable<Hero[]> {
    // Version en 2 lignes :
    // const heroes = of(HEROES);
    // return heroes;
    // En 1 seule ligne :
    this.messageService.add('HeroService; fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
