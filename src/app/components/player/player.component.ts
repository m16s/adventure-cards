import { Component, OnInit, Input, HostListener } from '@angular/core';
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
  isQuitMenuOn = false;

  constructor(
    private viewport: ViewportService,
  ) {
    viewport.viewport$.subscribe(viewport => {
      this.horizontalOrientation = viewport.orientation === Orientations.Horizontal;
    });
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    const card = this.gameplay.getFirstCard();
    this.updateCardsContent(card);
  }

  updateCardsContent(card: Card) {
    this.card = card;
    const actions = this.gameplay.getTwoActions(this.card);
    this.leftAction = actions ? actions[0] : null;
    this.rightAction = actions ? actions[1] : null;
  }

  cardClick() {
    if (this.gameplay.isGameOver(this.card)) {
      this.isQuitMenuOn = true;
    }
  }

  actionClick(action: CardAction) {
    const card = this.gameplay.getNextCard(action);
    this.updateCardsContent(card);
  }

  onRestart() {
    this.startGame();
    this.isQuitMenuOn = false;
  }
}
