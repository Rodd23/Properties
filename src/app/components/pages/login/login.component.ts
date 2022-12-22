import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  stage: string = "login"
  // email: string = 'rodrigo@email'
  // password: string = '123456'

  formLogin!: FormGroup;
  formRegister!: FormGroup;


  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

    this.formRegister = new FormGroup({
      nameregister: new FormControl('', [Validators.required]),
      emailregister: new FormControl('', [Validators.required]),
      passwordregister: new FormControl('', [Validators.required]),
      confirmedpasswordregister: new FormControl('', [Validators.required]),
    })
  }

  get email() {
    return this.formLogin.get('email')!
  }

  get password() {
    return this.formLogin.get('password')!;
  }

  get nameregister() {
    return this.formRegister.get('nameregister')!;
  }
  get emailregister() {
    return this.formRegister.get('emailregister')!;
  }
  get passwordregister() {
    return this.formRegister.get('passwordregister')!;
  }
  get confirmedpasswordregister() {
    return this.formRegister.get('confirmedpasswordregister')!;
  }

  handleStage(value: string) {
    this.stage = value
  }

  login() {
    if (this.formLogin.invalid) {
      return;
    }
   
    this.authService.authenticate(this.formLogin.value.email, this.formLogin.value.password);
  }

  register() {
    if (this.formRegister.invalid) {
      return;
    }

    console.log("Registrou")
  }
}
