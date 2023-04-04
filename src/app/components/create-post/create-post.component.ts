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
  tags: string[] = []
  imageString: string = "none"

  constructor(private readonly dt: DataService, private readonly router: Router) {
    if (!this.dt.user.value) {
      this.router.navigate(['login'])
    }
    else {
      this.canCreate = true
    }

  }
  setColor(a: string, b: string, c: string) {
    document.getElementById(c)!.style.backgroundColor = "rgba(255, 255, 255, 0.541)"
    document.getElementById(b)!.style.backgroundColor = "rgba(255, 255, 255, 0.541)"
    document.getElementById(a)!.style.backgroundColor = "white"

    if (a == "c1") {
      document.getElementById("addTag")!.style.display = "inline"
    }
    else {
      document.getElementById("addTag")!.style.display = "none"

    }
  }
  updatePhoto(event: Event): void {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageString = reader.result as string;

    };
  }
  addTag() {
    let a = <HTMLInputElement>document.getElementById("tag")!;
    const tagValue = a.value.trim();
    if (tagValue && !this.tags.includes(tagValue)) {
      this.tags.push(tagValue);
    }
    this.resetValue();
  }

  resetValue() {
    (document.getElementById("tag") as HTMLInputElement).value = "";
  }
  deleteTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags.splice(index, 1);
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
            photo: this.imageString,
            tags: this.tags,
            id: 0
          }

          if (this.dt.publicaciones != null) {

            const max = this.dt.publicaciones.reduce((maxIndex, post, currentIndex) => {
              return post.id > this.dt.publicaciones[maxIndex].id ? currentIndex : maxIndex;
            }, 0);
            post.id = this.dt.publicaciones[max].id + 1
          }
          else {
            post.id = 1
          }
          this.canCreate = false
          this.dt.postPost(post).subscribe(() => {
            console.log("POST DONE!")
            this.canCreate = true
          })
        })

      }


    }
  }
  ngOnInit(): void {
  }

}
