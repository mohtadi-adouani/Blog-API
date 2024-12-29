import {Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environement} from '../../environement';
import {User} from '../../interfaces/user';
import {map, Observable, tap} from 'rxjs';
import {CsrfService} from '../csrf/csrf.service';

export interface LoginCredentials {
 	username: string,
 	password: string,
  csrfmiddlewaretoken?: string | undefined
  next?: string | undefined
  submit?: string | undefined
 }
 @Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environement.apiURL;
  constructor(private http: HttpClient, private csrfService: CsrfService) { }
 	user = signal<User | undefined | null>(undefined);

 	login(credentials: LoginCredentials): Observable<User | null | undefined> {
     /* credentials.csrfmiddlewaretoken = this.csrfService.getToken();
     credentials.next = ""
     credentials.submit = "Log+in" */
 		return this.http.post(this.BASE_URL + '/user/login/', credentials).pipe(
 			tap((result: any) => {
         console.log(result)
 				localStorage.setItem('token', result['token']);
 				const user = Object.assign(new User(), result['user']);
 				this.user.set(user);
 			}),
 			map((result: any) => { return this.user(); })
 		)
 	}

   getUser(): Observable<User | null | undefined> {
 		return this.http.get('http://localhost:8000/sessions/me/').pipe(
 			tap((result: any) => {
 				const user = Object.assign(new User(), result);
 				this.user.set(user);
 			}),
 			map((result: any) => { return this.user(); })
		)
 	}

 	logout() {
 		return this.http.get(this.BASE_URL + '/api-auth/logout/').pipe(
 			tap((result: any) => {
 				localStorage.removeItem('token');
 				this.user.set(null);
 			})
 		)
 	}


 }
