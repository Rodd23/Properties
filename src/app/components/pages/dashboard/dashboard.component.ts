import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  navItems = [
    { label: 'Dashboard', routeLink: 'home', icon: 'fa-solid fa-home' },
    { label: 'Usuários', routeLink: 'users', icon: 'fa-solid fa-user-group'},
    { label: 'Imóveis', routeLink: 'properties', icon: 'fa-solid fa-building'},
  ]
}
