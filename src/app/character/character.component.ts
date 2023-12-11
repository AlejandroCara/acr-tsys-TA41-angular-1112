import { Component, OnInit } from '@angular/core';
import { RickapiService } from '../rickapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit{

  character: any = null;

  constructor(private rickapi: RickapiService, private route: Router, private activeRoute: ActivatedRoute){

  }

  ngOnInit() {
    //Recuperar el id pasado por la url
    let urlId = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.rickapi.getCharacterInfo(urlId).subscribe(result => this.character = result);
    this.rickapi.navItemClick(this.route.url);
  }
}
