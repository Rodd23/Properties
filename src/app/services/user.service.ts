import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { NgToastService } from  'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL: string = environment.API;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
  ) { }

  registerUser(id: string, name: string, email: string) {
    const url: string = `/user/${id}`

    const reqHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getJwtToken()}`
    })

    return this.http.put(this.BASE_URL + url, {
      name,
      email
    }, {
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
