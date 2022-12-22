import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { DashhomeComponent } from './components/pages/dashboard/dashhome/dashhome.component';
import { PropertyComponent } from './components/pages/dashboard/property/property.component';
import { UsersComponent } from './components/pages/dashboard/users/users.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component:  DashhomeComponent},
      { path: 'users', component: UsersComponent},
      { path: 'properties', component: PropertyComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
