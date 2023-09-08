import { Injectable } from '@angular/core';
import {Manga} from "./entities";
import {MANGAS} from "./mock-manga";

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  fetchById(id:number):Manga|undefined {
    return MANGAS[id];
  }
}
