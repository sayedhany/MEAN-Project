import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Post } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  @Output() post = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}
  onAddPost(form: NgForm) {
    const post: Post = { title: form.value.title, content: form.value.content };
    this.post.emit(post);

    // title.value = '';
    // content.value = '';
    // form.resetForm();
    console.log(form.value);
  }
}
