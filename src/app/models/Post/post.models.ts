interface IPost {
  author: string,
  title: string,
  content: string,
  id: number,

}
export class Post {
  dt: IPost;
  constructor(authorT: string, titleT: string, contentT: string, idT: number) {
    this.dt = { author: authorT, title: titleT, content: contentT, id: idT }
  }
}
