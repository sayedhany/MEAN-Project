import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: Post[];
  private sub: Subscription;
  constructor(private postSrv: PostService) {}

  ngOnInit(): void {
    this.posts = this.postSrv.getPosts();
    this.sub = this.postSrv.getPostUpdateList().subscribe((posts) => {
      this.posts = posts;
    });
  }
  onDeletePost(post) {
    this.postSrv.deletePost(post);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
