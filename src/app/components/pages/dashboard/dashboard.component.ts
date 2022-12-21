import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  navItems = [
    { label: 'Dashboard', routeLink: 'home', icon: 'fa-solid fa-home' },
  ]
}
