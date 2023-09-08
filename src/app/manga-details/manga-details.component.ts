import { Component,OnInit, Input } from '@angular/core';
import {Manga} from "../entities";
import {MANGAS} from "../mock-manga";
import {ActivatedRoute} from "@angular/router";
import {MangaService} from "../manga.service";

@Component({
  selector: 'app-manga-details',
  templateUrl: `manga-details.component.html`,
  styles: []
})
export class MangaDetailsComponent implements OnInit{

  constructor(private mangaService: MangaService, private route: ActivatedRoute) { }

  mangaSelected: Manga|undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      const mangaId: number = +params['id'];
      this.getMangaById(mangaId - 1);
    });
  }

  getMangaById(id:number):void {
    this.mangaSelected = this.mangaService.fetchById(id);
  }

}
