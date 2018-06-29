import { Component, OnInit } from '@angular/core';
import { ViewportService, Orientations } from '../../services/viewport.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  horizontalOrientation = true;

  constructor(
    private viewport: ViewportService,
  ) {
    viewport.viewport$.subscribe(viewport => {
      this.horizontalOrientation = viewport.orientation === Orientations.Horizontal;
    });
  }

  ngOnInit() {
  }

}
