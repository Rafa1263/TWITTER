import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from 'src/app/models/Post/post.models';
import { User } from 'src/app/models/User/user.models';
import { BehaviorSubject, map, Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly CONFIG_URL = 'https://twitter-f5f11-default-rtdb.firebaseio.com';

  private posts: Post[] = []
  private users: User[] = []
  public user: BehaviorSubject<User> = new BehaviorSubject({} as User)

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
  getUserCookie(): String {
    const token = document.cookie
    let res = false

    let temp = ""
    for (let i = 0; i < token.length; i++) {

      if (token[i] == "a" && token[i + 1] == "u" && token[i + 2] == "t" && token[i + 3] == "h" && token[i + 4] == "=") {
        i += 4
        res = true
      }
      else if (res == true) {
        temp += token[i]
      }
    }
    return temp
  }
  getUserByCookie() {


    let tempUser = this.users.find((us: User) => {
      return us.token! == this.getUserCookie();
    });
    this.user.next(tempUser!)
  }
  get publicaciones(): Post[] {
    return this.posts
  }
  // get usuario(): User {
  //   return this.user
  // }
  // set setUsuario(user: User) {
  //   this.user = user
  // }
  get usuarios(): User[] {
    return this.users
  }


  public getPosts(): Observable<void> {
    return this.http.get<Post[]>(`${this.CONFIG_URL}/posts.json`).pipe(map(((posts: Post[]) => {
      this.posts = posts
    })))

  }

  public getUsers(): Observable<void> {
    return this.http.get<User[]>(`${this.CONFIG_URL}/users.json`)
      .pipe(map(((users: User[]) => {
        this.users = users
      })))
  }

  public setCookie(token: string): void {
    document.cookie = `auth = ${token}; path = /`

  }

  public postUser(user: User): Observable<User> {
    if (this.users == null) {
      return this.http.put<User>(`${this.CONFIG_URL}/users/${0}.json`, user)
    }
    return this.http.put<User>(`${this.CONFIG_URL}/users/${this.users.length}.json`, user)

  }
  public postPost(post: Post): Observable<User> {
    if (this.posts == null) {
      return this.http.put<User>(`${this.CONFIG_URL}/posts/0.json`, post)

    }
    return this.http.put<User>(`${this.CONFIG_URL}/posts/${this.posts.length}.json`, post)

  }

  public putUser(user: User, index: number): void {
    this.http.put<User>(`${this.CONFIG_URL}/users/${index}.json`, user).subscribe(() => {

    })
  }


}
