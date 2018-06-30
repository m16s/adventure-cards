import { Component, OnInit } from '@angular/core';
import { AdventuresService, Adventure } from '../../services/adventures.service';
import { ViewportService, Orientations } from '../../services/viewport.service';

@Component({
  selector: 'app-page-library',
  templateUrl: './page-library.component.html',
  styleUrls: ['./page-library.component.scss']
})
export class PageLibraryComponent implements OnInit {
  adventures: Adventure[] = [];
  horizontalOrientation = true;

  constructor(
    private _adv: AdventuresService,
    private viewport: ViewportService,
  ) {
    _adv.adventures$.subscribe(data => this.adventures = data);

    viewport.viewport$.subscribe(viewport => {
      this.horizontalOrientation = viewport.orientation === Orientations.Horizontal;
    });
  }

  ngOnInit() {
  }

}
