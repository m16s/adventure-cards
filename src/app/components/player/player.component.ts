import { Component, OnInit, Input } from '@angular/core';
import { ViewportService, Orientations } from '../../services/viewport.service';
import { Gameplay } from '../../models/Gameplay';
import { Card, CardAction } from '../../models/Adventure';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() gameplay: Gameplay;

  horizontalOrientation = true;
  card: Card;
  leftAction: CardAction;
  rightAction: CardAction;

  constructor(
    private viewport: ViewportService,
  ) {
    viewport.viewport$.subscribe(viewport => {
      this.horizontalOrientation = viewport.orientation === Orientations.Horizontal;
    });
  }

  ngOnInit() {
    this.card = this.gameplay.getFirstCard();
    this.updateCardsContent(this.card);
  }

  updateCardsContent(card: Card) {
    const actions = this.gameplay.getTwoActions(this.card);
    this.leftAction = actions ? actions[0] : null;
    this.rightAction = actions ? actions[1] : null;
  }
}
