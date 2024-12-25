import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PostsComponent} from './components/posts/posts/posts.component';
import {MessagesComponent} from './components/messages/messages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostsComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-front-app';
}
