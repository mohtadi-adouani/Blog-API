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
}
