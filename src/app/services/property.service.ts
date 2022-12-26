import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { NgToastService } from  'ng-angular-popup';

const JWT_TOKEN = 'token'

@Injectable({
  providedIn: 'root'
})

export class PropertyService {
  private readonly BASE_URL: string = environment.API;


  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService,
    private toast: NgToastService
  ) { }

  register(acquisition: string, sale: string, sold: boolean, profit: string) {
    const url: string = '/properties/register'
    const reqHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getJwtToken()}`
    })

    return this.http.post(this.BASE_URL + url, {
      acquisition,
      sale,
      sold,
      profit
    },
    { 
      headers: reqHeaders
    }).subscribe({
      next: (res: any) => {
        this.toast.success({
          summary: `${res.msg}`,
          duration: 3000,
        })
        this.router.navigate(['dashboard/home'])
      }, 
      error: (error: HttpErrorResponse) => {
        this.toast.error({
          summary: `${error.error.msg}`,
          duration: 3000,
        })
      }
    })
  }
}
