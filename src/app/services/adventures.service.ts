import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Adventure } from '../models/Adventure';

export interface AdventureAPIResponse {
  creationDate: string;
  editDate: string;
  adventures: Adventure[];
}

@Injectable({
  providedIn: 'root'
})
export class AdventuresService {
  private _adventures$ = new BehaviorSubject<Adventure[]>([]);

  constructor(
    private _http: HttpClient,
  ) {
    this.getAdventures().subscribe(res => this._adventures$.next(res.adventures));
  }

  get adventures$(): Observable<Adventure[]> {
    return this._adventures$.asObservable();
  }

  private getAdventures() {
    const url = environment.adventuresUrl;

    return this._http
    .get(url)
    .pipe(
      map(res => res as AdventureAPIResponse),
    );
  }
}
