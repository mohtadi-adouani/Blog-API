import {Component, OnInit} from '@angular/core';
import { Post} from '../../interfaces/post';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PostService} from '../../services/post/post.service';
import {RouterLink} from '@angular/router';
import {PostListResponse} from '../../interfaces/PostListResponse';

@Component({
  selector: 'app-posts',
  imports: [
    FormsModule,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe((posts_response: PostListResponse) => this.posts = posts_response.results);
  }

    ngOnInit(): void {
      this.getPosts();
    }

}
