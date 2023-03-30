import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/Post/post.models';
import { User } from 'src/app/models/User/user.models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly CONFIG_URL = 'https://twitter-f5f11-default-rtdb.firebaseio.com';

  private posts: Post[] = []
  private users: User[] = []

  constructor(public http: HttpClient) {

  }

  getCookie(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 10
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  get publicaciones(): Post[] {
    return this.posts
  }

  get usuarios(): User[] {
    return this.users
  }

  public getPosts() {
    this.http.get<Post[]>(`${this.CONFIG_URL}/posts.json`)
      .subscribe((posts: Post[]) => {
        this.posts = posts
      })
  }

  public getUsers(): Observable<void> {
    return this.http.get<User[]>(`${this.CONFIG_URL}/users.json`)
      .pipe(map(((users: User[]) => {
        this.users = users
      })))
  }

  public setCookie(token: string): void {
    document.cookie = `auth=${token};path=/`

  }

  public postUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.CONFIG_URL}/users/${this.users.length}.json`, user)
  }

  public putUser(user: User, index: number): void {
    this.http.put<User>(`${this.CONFIG_URL}/users/${index}.json`, user).subscribe(() => {

    })
  }


}
