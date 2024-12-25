import {Component, OnInit} from '@angular/core';
import { Post} from '../../../interfaces/post';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {POSTS} from '../../../data/post-mock';
import {PostDetailComponent} from '../post-detail/post-detail.component';
import {PostService} from '../../../services/post/post.service';

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
export class PostsComponent implements OnInit{
  posts: Post[] = [];
  selectedPost?: Post;

  constructor(private postService: PostService) { }
  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => this.posts = posts);
  }

    ngOnInit(): void {
      this.getPosts();
    }

}
