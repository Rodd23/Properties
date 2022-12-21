import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    // private http: HttpClient,
    private router: Router,
  ) { }

  authenticate(email: string, password: string) {
    this.router.navigate(['/dashboard/home'])
  }
}
