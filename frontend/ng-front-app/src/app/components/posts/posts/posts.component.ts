import {Component, OnInit} from '@angular/core';
import { Post} from '../../../interfaces/post';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PostService} from '../../../services/post/post.service';
import {MessageService} from '../../../services/message/message.service';
import {RouterLink} from '@angular/router';

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
    this.postService.getPosts().subscribe((posts: Post[]) => this.posts = posts);
  }

    ngOnInit(): void {
      this.getPosts();
    }

}
