import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { AdventuresService } from './services/adventures.service';
import { DeckComponent } from './components/deck/deck.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { PageAdventureComponent } from './containers/page-adventure/page-adventure.component';
import { PageLibraryComponent } from './containers/page-library/page-library.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerComponent,
    DeckComponent,
    DeckListComponent,
    PageAdventureComponent,
    PageLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AdventuresService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
