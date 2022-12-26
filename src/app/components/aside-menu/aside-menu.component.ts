import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent {
  @Input() navItems: any;
  @Output() handlerLogout: EventEmitter<boolean> = new EventEmitter<boolean>();


  logout() {
    this.handlerLogout.emit()
  }
}
