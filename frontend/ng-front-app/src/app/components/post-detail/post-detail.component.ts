import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe, Location} from "@angular/common";
import {Post} from '../../interfaces/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post-detail',
    imports: [
        FormsModule,
        NgIf,
        UpperCasePipe
    ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const post_slug = String(this.route.snapshot.paramMap.get('post_slug'));
    this.postService.getPost(post_slug)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back()
  }
}
