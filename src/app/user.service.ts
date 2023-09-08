import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get<IUser[]>(this.url);
  }

  fetchById(id:number) {
    return this.http.get<IUser>(this.url+"/"+id);
  }

}
