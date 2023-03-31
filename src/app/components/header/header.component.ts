import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/config-service/config.service';
import { User } from 'src/app/models/User/user.models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  img: string = "https://www.pngitem.com/pimgs/m/678-6785829_my-account-instagram-profile-icon-hd-png-download.png"
  constructor(private readonly dt: DataService, private readonly router: Router) {
    this.dt.getUsers().subscribe(() => {
      this.dt.getUserByCookie()
      if (!this.dt.user.value) {
        if (this.router.url != "/login" && this.router.url != "/register")
          this.router.navigate(['login'])
      }
      else {

        this.img = this.dt.user.value.photo!
      }

    })
  }

  logout() {
    document.cookie = `auth=`
    window.location.reload()
  }

  openMenu() {
    if (document.getElementById("state")!.innerHTML != "1") {
      document.getElementById("menu-animation")!.style.transform = "translatex(0px)"
      document.getElementById("state")!.innerHTML = "1";
    }
  }

  closeMenu() {
    if (document.getElementById("state")!.innerHTML == "1") {
      document.getElementById("menu-animation")!.style.transform = "translatex(3000px)"
      document.getElementById("state")!.innerHTML = "0";
    }
  }

}

