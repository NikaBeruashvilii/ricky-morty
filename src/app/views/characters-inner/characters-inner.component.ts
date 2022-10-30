import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickyMortyService } from './../../shared_services/ricky-morty.service';

@Component({
  selector: 'app-characters-inner',
  templateUrl: './characters-inner.component.html',
  styleUrls: ['./characters-inner.component.css']
})
export class CharactersInnerComponent implements OnInit {
  innerList:any;

  constructor(private rickyMortyService:RickyMortyService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var name = params["name"];
      this.rickyMortyService.getRickyMortyId(name).subscribe((response:any) => {
        this.innerList = response.results;
        console.log(response)
      })
    })
  }

}
