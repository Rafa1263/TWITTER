import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User/user.models';
import { DataService } from 'src/app/services/config-service/config.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  user: User = {} as User
  constructor(private readonly dt: DataService) {
    this.dt.user.subscribe((user: User) => {
      this.user = user
    })
    if (!this.user.name) {
      this.dt.getUserByCookie()
    }
    console.log(this.user)
  }

  ngOnInit(): void {
  }

}
