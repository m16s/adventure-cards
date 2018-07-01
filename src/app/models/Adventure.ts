
export type CardId = string;

export interface CardAction {
  id: CardId;
  text: string;
}

export interface Card {
  id: CardId;
  text: string;
  isStart: boolean;
  actions: CardAction[];
}

export interface Adventure {
  id: string;
  name: string;
  cards: Card[];
}
