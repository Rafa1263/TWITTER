import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/config-service/config.service';
import { User } from 'src/app/models/User/user.models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  img: string = "https://www.pngitem.com/pimgs/m/678-6785829_my-account-instagram-profile-icon-hd-png-download.png"
  constructor(private readonly dt: DataService) {
    this.dt.user.subscribe((user: User) => {
      this.img = user.photo as string
    })
  }


  logout() {
    document.cookie = `auth=`
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

