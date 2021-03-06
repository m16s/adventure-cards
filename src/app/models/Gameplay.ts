import { Adventure, Card, CardAction } from "./Adventure";
import { randomInt } from "../utils/randomInt";
import { randomArrayElements } from "../utils/randomArrayElements";

export class Gameplay {

  constructor(
    private adventure: Adventure,
  ) {}

  get cards() {
    return this.adventure.cards;
  }

  getFirstCard(): Card {
    const startCards = this.cards.filter(c => c.isStart);
    const card = startCards[randomInt(0, startCards.length - 1)];

    if (!card) {
      throw new Error('no Start card');
    }

    return card;
  }

  getNextCard(action: CardAction): Card {
    return this.cards.find(c => c.id === action.id);
  }

  getTwoActions(card: Card): [CardAction, CardAction] | null {
    const actions = card.actions;

    if (!actions || actions.length === 0) {
      return null;
    }

    if (actions.length === 1) {
      return [actions[0], actions[0]];
    }

    const results = randomArrayElements(actions, 2);
    return [results[0], results[1]];
  }

  isGameOver(card: Card): boolean {
    return !card.actions || card.actions.length === 0;
  }
}
