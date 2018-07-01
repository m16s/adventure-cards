import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil, filter, first } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from '../../utils/UnsubscribeOnDestroy';
import { Adventure } from '../../models/Adventure';
import { Gameplay } from '../../models/Gameplay';
import { AdventuresService } from '../../services/adventures.service';

@Component({
  selector: 'app-page-adventure',
  templateUrl: './page-adventure.component.html',
  styleUrls: ['./page-adventure.component.scss']
})
export class PageAdventureComponent extends UnsubscribeOnDestroy implements OnInit {
  noAdventureFound = false;
  adventure: Adventure;
  gameplay: Gameplay;

  constructor(
    private _adv: AdventuresService,
    private _route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    const id = this._route.snapshot.params.id;
    this._adv.adventures$.pipe(
      takeUntil(this.unsubscribe$),
      filter(advs => advs.length > 0),
      map(advs => advs.find(a => a.id === id)),
    )
    .subscribe(adventure => {
      if (!adventure) {
        this.noAdventureFound = true;
      } else {
        this.adventure = adventure;
        this.gameplay = new Gameplay(adventure);  
      }
    });
  }

}
