
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core'
import { Post } from 'src/app/models/Post/post.models';
import { User } from 'src/app/models/User/user.models';
import { DataService } from 'src/app/services/config-service/config.service';
// Poner en input

@Component({
  selector: 'app-comment-prevview',
  templateUrl: './comment-prevview.component.html',
  styleUrls: ['./comment-prevview.component.scss']
})

export class CommentPrevviewComponent {
  posts: Post[] = []
  users: User[] = []
  loader: boolean = false
  constructor(private readonly dt: DataService) {
    this.dt.getPosts().subscribe(() => {
      this.dt.getUsers().subscribe(() => {
        this.users = this.dt.usuarios

      })
      this.posts = this.dt.publicaciones

    })
    this.loader = true
  }


}
