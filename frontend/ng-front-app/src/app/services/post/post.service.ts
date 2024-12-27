import {Injectable, signal} from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Post} from '../../interfaces/post';
import {POSTS} from '../../data/post-mock';
import {environement} from "../../environement";
import {PostListResponse} from '../../interfaces/PostListResponse';
@Injectable({
  providedIn: 'root',
})


export class PostService {
    private BASE_URL = environement.apiURL;

  constructor(private http: HttpClient) { }
  getPosts(): Observable<PostListResponse> {
        return this.http.get<PostListResponse>(this.BASE_URL + '/posts/')
  }
  getPost(id: number): Observable<Post>{
      // For now, assume that a post with the specified `id` always exists.
      const post_data: Post| undefined = POSTS.find(h => h.id === id)
      return post_data ? of(post_data) : of(POSTS[0]);
  }
}
