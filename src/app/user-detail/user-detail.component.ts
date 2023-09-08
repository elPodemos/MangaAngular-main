import { Component, Input } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-detail',
  templateUrl: `user-detail.component.html`,
  styles: []
})
export class UserDetailComponent {
  @Input() userC: IUser|undefined ;

}
