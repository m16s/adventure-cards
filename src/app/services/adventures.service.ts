import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

type CardId = string;

export interface CardAction {
  id: CardId;
  text: string;
}

export interface Card {
  id: CardId;
  text: string;
  actions: CardAction[];
}

export interface Adventure {
  id: string;
  name: string;
  cards: Card[];
}

interface AdventureAPIResponse {
  creationDate: string;
  editDate: string;
  adventures: Adventure[];
}

@Injectable({
  providedIn: 'root'
})
export class AdventuresService {

  constructor(
    private _http: HttpClient,
  ) { }

  getAdventures() {
    const url = environment.adventuresUrl;

    return this._http
    .get(url)
    .pipe(
      map(res => res as AdventureAPIResponse),
    );
  }
}
