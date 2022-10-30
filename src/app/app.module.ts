import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickyMortyCardsComponent } from './shared_components/ricky-morty-cards/ricky-morty-cards.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { CharactersComponent } from './views/characters/characters.component';
import { CharactersInnerComponent } from './views/characters-inner/characters-inner.component';
import { HomeComponent } from './views/home/home.component';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    RickyMortyCardsComponent,
    NavbarComponent,
    CharactersComponent,
    CharactersInnerComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
