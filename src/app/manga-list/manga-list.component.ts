import { Component, OnInit } from '@angular/core';
import {Manga} from "../entities";
import {MANGAS} from "../mock-manga";

@Component({
  selector: 'app-manga-list',
  templateUrl: `manga-list.component.html`,
  styles: []
})
export class MangaListComponent implements OnInit{
  mangaList: Manga[] = MANGAS;

  ngOnInit(): void {
    console.log(this.mangaList);
  }

}
