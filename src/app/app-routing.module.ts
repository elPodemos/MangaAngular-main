import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MangaListComponent} from "./manga-list/manga-list.component";
import {MangaDetailsComponent} from "./manga-details/manga-details.component";
import {Error404Component} from "./error404/error404.component";
import {UserComponent} from "./user/user.component";
import { UserRedirectComponent } from './user-redirect/user-redirect.component';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'liste', component: MangaListComponent},
  {path: 'liste/:id', component: MangaDetailsComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserRedirectComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactReactive', component: ContactReactiveComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
