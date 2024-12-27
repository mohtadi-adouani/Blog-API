import { Component, OnInit } from '@angular/core';
import { Post} from '../../interfaces/post';
import { PostListResponse} from '../../interfaces/PostListResponse';
import { PostService} from '../../services/post/post.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe((posts_response: PostListResponse) => {
          this.posts = posts_response.results.length > 5 ? posts_response.results.slice(1,5): posts_response.results
        }
      );
  }
}
