import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Hero} from './hero';
import {HEROS} from './mock-heroes';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  // getHeros(): Hero[] {
  //   return HEROS;
  //
  // }
  getHeros(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROS);
  }
}
