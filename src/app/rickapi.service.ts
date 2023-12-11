import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickapiService {

  apiUrl: string = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { }

  getEightCharacters(){
    // https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8
    let eighCharactersUrl = this.apiUrl;
    for(let i = 0; i < 8; i++){
      eighCharactersUrl += this.randomMinMax(1, 826) + ",";
    }
    return this.http.get(eighCharactersUrl);
  }

  //Poner el nav-item pulsado como activo
  navItemClick(route: string){
    let navItems = document.getElementsByClassName("nav-link");
    console.log(route.split("/"))
    //Eliminar la clase active de todos los botones del nav
    for(let i = 0; i < navItems.length; i++){
      if((<HTMLInputElement>navItems[i]).getAttribute("routerLink") == route){
        (<HTMLInputElement>navItems[i]).classList.add("active")
      } else {
        (<HTMLInputElement>navItems[i]).classList.remove("active")
      }
    }

    if (route.split("/")[1] == "character"){
      (<HTMLInputElement>navItems[1]).classList.add("active")
    }
  }

  getCharacterInfo(id: number){
    let oneCharacterUrl = this.apiUrl;
    oneCharacterUrl += id;
    return this.http.get(oneCharacterUrl);
  }

  randomMinMax(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
