import {Injectable} from '@angular/core';
import {Post} from '../../interfaces/post';
import {POSTS} from '../../data/post-mock';
import {Observable, of} from 'rxjs';
import {MessageService} from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private messageService: MessageService) { }
  getPosts(): Observable<Post[]> {
    const posts = of(POSTS);
    this.messageService.add('PostService: fetched posts');
    return posts;
  }
  getPost(id: number): Observable<Post> {
      // For now, assume that a post with the specified `id` always exists.
      const post = POSTS.find(h => h.id === id)!;
      this.messageService.add(`PostService: fetched post id=${id}`);
      return of(post);
  }
}
