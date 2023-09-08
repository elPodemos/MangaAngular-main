import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../iuser";

@Component({
  selector: 'app-user',
  templateUrl: `user.component.html`,
  styles: []
})
export class UserComponent implements OnInit{

  constructor(private service:UserService){}

  users:IUser[] = []
  usersParent : IUser | undefined ;
  
  ngOnInit() {
    this.getUser();
    console.log('marche');
  }

  getUser(){
    this.service.fetchAll().subscribe( data =>{
      this.users = data;
      // console.log(this.users);
      return this.users;

    })
  }

  selectUser(user:IUser){
    this.usersParent = user;
  }

}
