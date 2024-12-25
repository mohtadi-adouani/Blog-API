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
}
