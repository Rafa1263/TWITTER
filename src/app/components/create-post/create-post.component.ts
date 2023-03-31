import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post/post.models';
import { User } from 'src/app/models/User/user.models';
import { DataService } from 'src/app/services/config-service/config.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  canCreate = false
  user: User = {} as User
  constructor(private readonly dt: DataService, private readonly router: Router) {
    if (!this.dt.user.value) {
      this.router.navigate(['login'])
    }
    else {
      this.canCreate = true
    }

  }

  createPost() {
    if (this.canCreate == true) {

      let title = <HTMLInputElement>document.getElementById("title")
      let content = <HTMLInputElement>document.getElementById("content")
      if (title.value != "" && content.value != "") {
        this.dt.getPosts().subscribe(() => {
          const post = {
            author: this.dt.user.value.name,
            author_id: this.dt.user.value.id,
            title: title.value,
            content: content.value,
            id: 0
          }
          const max = this.dt.publicaciones.reduce((maxIndex, post, currentIndex) => {
            return post.id > this.dt.publicaciones[maxIndex].id ? currentIndex : maxIndex;
          }, 0);
          post.id = this.dt.publicaciones[max].id + 1
          this.dt.postPost(post).subscribe(() => {
            console.log("POST DONE!")
          })
        })

      }


    }
  }
  ngOnInit(): void {
  }

}
