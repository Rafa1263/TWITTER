import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { User } from 'src/app/models/User/user.models';
import { DataService } from 'src/app/services/config-service/config.service';
@Component({
  selector: 'app-registerF',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  private users: User[] = []
  public loaded = false

  constructor(private readonly dt: DataService, private router: Router) {
    this.dt.getUsers().subscribe(() => {
      this.loaded = true
    })

  }

  register() {
    let username = <HTMLInputElement>document.getElementById("username")
    let password = <HTMLInputElement>document.getElementById("password")
    let token = this.dt.getCookie()
    if (username.value != "" && password.value != "") {

      const user = {
        name: username.value,
        password: password.value,
        token: token,
        id: 0,
      }
      if (!this.dt.usuarios.find((us: User) => us.name === user.name)) {
        const max = this.dt.usuarios.reduce((maxIndex, user, currentIndex) => {
          return user.id > this.dt.usuarios[maxIndex].id ? currentIndex : maxIndex;
        }, 0);
        user.id = this.dt.usuarios[max].id + 1

        this.dt.setCookie(token)

        this.dt.postUser(user).subscribe(() => {
          this.dt.getUsers().subscribe(() => { })
          console.log("User Created")
          this.router.navigate([''])

        })

      }
    }
  }
}
