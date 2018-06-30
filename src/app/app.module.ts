import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { AdventuresService } from './services/adventures.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerComponent
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
