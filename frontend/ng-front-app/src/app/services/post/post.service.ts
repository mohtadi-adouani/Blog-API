import {Injectable} from '@angular/core';
import {Post} from '../../interfaces/post';
import {POSTS} from '../../data/post-mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor() { }
  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
  getPost(id: number): Observable<Post>{
      // For now, assume that a post with the specified `id` always exists.
      const post_data: Post| undefined = POSTS.find(h => h.id === id)
      return post_data ? of(post_data) : of(POSTS[0]);
  }
}
