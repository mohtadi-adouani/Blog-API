import { Component } from '@angular/core';
import { Post} from '../post';
import {UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [
    UpperCasePipe,
    FormsModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  post: Post = {
    id: 1,
    title: "Exemple de titre",
    body: "Exemple de body",
  };

}
