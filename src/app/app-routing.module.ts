import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersInnerComponent } from './views/characters-inner/characters-inner.component';
import { CharactersComponent } from './views/characters/characters.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:name', component: CharactersInnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
