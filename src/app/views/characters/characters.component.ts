import { Component, OnInit } from '@angular/core';
import { RickyMortyService } from './../../shared_services/ricky-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  allCharactersList:any[] = [];

  constructor(private rickyMortyService:RickyMortyService) { }

  ngOnInit(): void {
    this.rickyMortyService.getAllCharacters().subscribe((response:any) => {
      this.allCharactersList = response.results;
      console.log(response);
    })
  }

}
