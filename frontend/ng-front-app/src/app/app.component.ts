import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
}
