import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  hide: boolean = true;

  check() {
    if(this.hide) {
      this.hide = false
    } else {
      this.hide = true
    }
  }
}
