import { Component } from '@angular/core';
import { Post} from '../post';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {POSTS} from '../post-mock';
import {PostDetailComponent} from '../post-detail/post-detail.component';

@Component({
  selector: 'app-posts',
  imports: [
    FormsModule,
    NgForOf,
    PostDetailComponent,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts = POSTS;
  selectedPost?: Post;


  onSelect(post: Post): void {
    this.selectedPost = post;
  }

}
