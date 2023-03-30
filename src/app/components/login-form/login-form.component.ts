import { Component } from '@angular/core';
import { DataService } from 'src/app/services/config-service/config.service';
import { User } from 'src/app/models/User/user.models';
import { Post } from 'src/app/models/Post/post.models';
import { Router } from '@angular/router';
const db = "test_comment_db"
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  private user: User = {} as User
  public loaded = false

  constructor(private readonly dt: DataService, private router: Router) {
    this.dt.getUsers().subscribe(() => {
      this.loaded = true
    })

  }

  login() {
    if (this.loaded = true) {
      let username = <HTMLInputElement>document.getElementById("username")
      let password = <HTMLInputElement>document.getElementById("password")
      let token = this.dt.getCookie()
      if (username.value != "" && password.value != "") {
        const userIndex = this.dt.usuarios.findIndex((us: User) => us.name === username.value && us.password === password.value);
        this.user = this.dt.usuarios[userIndex]
        this.user.token = token
        this.dt.putUser(this.user, userIndex)
        this.dt.setCookie(token)
      }
    }
  }

}
