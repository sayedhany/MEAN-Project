import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() {}
  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.postsUpdated.next([...this.posts]);
  }
  getPostUpdateList(): Observable<Post[]> {
    return this.postsUpdated.asObservable();
  }
  getPosts() {
    return this.posts.slice();
  }
  deletePost(deletedPost: Post) {
    this.posts = this.posts.filter((post) => post.title !== deletedPost.title);
    this.postsUpdated.next([...this.posts]);
    console.log(this.posts);
  }
}
