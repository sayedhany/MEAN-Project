import { Component } from '@angular/core';
import { Post } from './shared/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MEAN-Project';
  posts: Post[] = [];
  onPostAdded($event) {
    this.posts.push($event);
  }
}
