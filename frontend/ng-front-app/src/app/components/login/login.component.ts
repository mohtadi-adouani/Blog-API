import { Component, inject, OnDestroy, OnInit } from '@angular/core';
 import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
 import { MatButtonModule } from '@angular/material/button';
 import { MatInputModule } from '@angular/material/input';
 import { LoginCredentials, AuthService} from '../../services/auth/auth.service';
import { Router } from '@angular/router';
 import { Subscription } from 'rxjs';
import {CsrfService} from '../../services/csrf/csrf.service';
import {PostListResponse} from '../../interfaces/PostListResponse';


@Component({
 	selector: 'app-login',
 	standalone: true,
 	imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
 	templateUrl: './login.component.html',
 	styleUrl: './login.component.css'
 })
 export class LoginComponent implements OnDestroy, OnInit {

 	private formBuilder = inject(FormBuilder);
 	private authService = inject(AuthService);
 	private csrfService = inject(CsrfService);
 	private router = inject(Router);

 	private loginSubscripton: Subscription | null = null;
   private csrf: string = "";

 	loginFormGroup = this.formBuilder.group({
 		'username': ['', [Validators.required]],
 		'password': ['', [Validators.required]]
 	});

 	invalidCredentials = false;

 	login() {
 		this.loginSubscripton = this.authService.login( this.loginFormGroup.value as LoginCredentials ).subscribe({
 			next: result => { this.navigateHome(); },
 			error: error => { this.invalidCredentials = true; }
 		});
 	}

 	navigateHome() {
 		this.router.navigate(['home']);
 	}

 	ngOnDestroy(): void {
 		this.loginSubscripton?.unsubscribe();
 	}

  ngOnInit(): void {
    this.csrfService.loadCsrfToken()

  }
 }
