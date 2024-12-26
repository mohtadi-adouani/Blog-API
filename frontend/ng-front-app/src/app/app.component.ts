import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MessagesComponent} from './components/messages/messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    MessagesComponent,
    RouterLink
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
}
