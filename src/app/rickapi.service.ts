import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickapiService {

  constructor(private http: HttpClient) { }

  getEightCharacters(){
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
  }

  //Poner el nav-item pulsado como activo
  navItemClick(route: string){
    let navItems = document.getElementsByClassName("nav-link");
    
    //Eliminar la clase active de todos los botones del nav
    for(let i = 0; i < navItems.length; i++){
      if((<HTMLInputElement>navItems[i]).getAttribute("routerLink") == route){
        (<HTMLInputElement>navItems[i]).classList.add("active")
      } else {
        (<HTMLInputElement>navItems[i]).classList.remove("active")
      }
    }
  }
}
