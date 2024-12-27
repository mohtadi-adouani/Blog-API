import {Post} from './post';

export interface PostListResponse {
    count:number;
    next:number | null,
    previous:number | null,
    results: Post[]
  }
