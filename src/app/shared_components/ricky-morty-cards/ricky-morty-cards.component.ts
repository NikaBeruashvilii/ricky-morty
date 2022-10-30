import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ricky-morty-cards',
  templateUrl: './ricky-morty-cards.component.html',
  styleUrls: ['./ricky-morty-cards.component.css']
})
export class RickyMortyCardsComponent implements OnInit {
  @Input() charactersItem:any;
  constructor() {}

  ngOnInit(): void {
  }

}
