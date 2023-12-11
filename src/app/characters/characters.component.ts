import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{

  characters: any = null;

  constructor(private rickapi: RickapiService, private route: Router){

  }

  ngOnInit() {
    this.rickapi.getEightCharacters().subscribe(result => this.characters = result);
    this.rickapi.navItemClick(this.route.url);
    console.log(this.route.url);
  }
  
}
