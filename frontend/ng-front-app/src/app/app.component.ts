import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavBarComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
}
