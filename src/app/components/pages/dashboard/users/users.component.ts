import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  hide: boolean = true;
  user: any = '';
  formUser!: FormGroup;

  nameUser: string = ''

  constructor(
    private auth: AuthService, 
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.formUser = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })

    this.user = this.auth.getUserId()
    console.log(this.user)

    this.auth.getUser(this.user).subscribe((result: any) => {
      this.formUser.patchValue({
        name: result.user.name,
        email: result.user.email
      })
    })
   
  }


  get name() {
    return this.formUser.get('name')!
  }

  get email() {
    return this.formUser.get('email')!
  }

  check() {
    if(this.hide) {
      this.hide = false
    } else {
      this.hide = true
    }
  }

  registerUser() {
    if (this.formUser.invalid) {
      return;
    }

    this.userService.registerUser(this.user, this.formUser.value.name, this.formUser.value.email)
  }
}
