import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-redirect',
  templateUrl: 'user-redirect.component.html'
})
export class UserRedirectComponent implements OnInit{

  constructor(private service: UserService, private route: ActivatedRoute) { }

  userSelected: IUser|undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.fetchById(params['id']).subscribe(data => { this.userSelected = data; });
    });
  }

}
