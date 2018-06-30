import { Component } from '@angular/core';
import { AdventuresService } from './services/adventures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    adventures: AdventuresService,
  ) {
    adventures.getAdventures().subscribe(data => console.log(data));
  }
}
