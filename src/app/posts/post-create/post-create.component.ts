import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Post } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  constructor(private postSrv: PostService) {}

  ngOnInit(): void {}
  onAddPost(form: NgForm) {
    const post: Post = { title: form.value.title, content: form.value.content };
    if (!form.valid) return;
    this.postSrv.addPost(post);
    console.log(form.value);
    form.resetForm();
  }
}
