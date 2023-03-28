import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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

