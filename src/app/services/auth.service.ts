import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgToastService } from  'ng-angular-popup';
import { User } from '../models/user';


const JWT_TOKEN = 'token';
const USER_ID = 'userId'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL: string = environment.API;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService
  ) { }

  authenticate(email: string, password: string) {
    const url: string = '/auth/login'

    return this.http.post(this.BASE_URL + url, {
      email,
      password
    }).subscribe({
      next: (res: any) => {
        this.toast.success({
          summary: `${res.msg}`,
          duration: 3000,
        })
        this.storeToken(res?.token, res?.userId);
        this.router.navigate(['/dashboard/home'])
      },
      error: (error: HttpErrorResponse) => {
        this.toast.error({
          summary: `${error.error.msg}`,
          duration: 3000,
        })
      } 
    });
  }

  register(name: string, email: string, password: string, confirmedpassword: string) {
    const url: string = '/auth/register'

    return this.http.post<User>(this.BASE_URL + url, {
      name,
      email,
      password,
      confirmedpassword
    }).subscribe({
      next: (res: any) => {
        this.toast.success({
          summary: `${res.msg}`,
          duration: 3000,
        })
      },
      error: (error: HttpErrorResponse) => {
        this.toast.error({
          summary: `${error.error.msg}`,
          duration: 3000,
        })
      }
    })
  }

  storeToken(token: string, userId: string) {
    localStorage.setItem(JWT_TOKEN, token);
    localStorage.setItem(USER_ID, userId)
  }

  getJwtToken() {
    return localStorage.getItem(JWT_TOKEN);
  }

  getUserId() {
    return localStorage.getItem(USER_ID);
  }

  getUser(id: string) {
    const reqHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.getJwtToken()}`
    })

    const url: string = `/user/${id}`

    return this.http.get(this.BASE_URL + url, { headers: reqHeaders})

  }

  isLoggedIn() {
    if (this.getJwtToken()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.removeToken();
    this.toast.success({
      summary: "Usuário desconectado",
      duration: 3000,
    })
    this.router.navigate(['/'])  
  }

  private removeToken() {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(USER_ID)
  }
  
}
