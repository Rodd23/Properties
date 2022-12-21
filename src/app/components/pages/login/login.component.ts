import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  stage: string = "login"
  email: string = 'rodrigo@email'
  password: string = '123456'


  constructor(private authService: AuthService) {}

  handleStage(value: string) {
    this.stage = value
  }

  login() {
    this.authService.authenticate(this.email, this.password);
  }
}
