import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {AuthService} from './services/auth/auth.service';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavBarComponent,
    MatIcon
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
  constructor(protected authService: AuthService, private router: Router) {}
  logout() {
 		this.authService.logout().subscribe({
 			next: _ => { this.navigateToLogin(); },
 			error: _ => { this.navigateToLogin(); }
 		})
 	}

 	navigateToLogin() {
 		this.router.navigate(['login']);
 	}

 	navigateHome() {
 		this.router.navigate(['dashboard']);
 	}

}
