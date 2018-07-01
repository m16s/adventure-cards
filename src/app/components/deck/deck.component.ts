import { Component, OnInit, Input } from '@angular/core';
import { Adventure } from '../../models/Adventure';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() adventure: Adventure;
  
  constructor() { }

  ngOnInit() {
  }

}
