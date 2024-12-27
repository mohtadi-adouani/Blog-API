import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Post} from '../../interfaces/post';
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
  getPost(post_url: string): Observable<Post>{
      return this.http.get<Post>(this.BASE_URL + '/posts/' +post_url)
  }
}
