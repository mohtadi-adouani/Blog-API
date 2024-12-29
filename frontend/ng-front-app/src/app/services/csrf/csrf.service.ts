import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environement} from '../../environement';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  private token_header: string = "csrfmiddlewaretoken";
  private BASE_URL = environement.apiURL;

  constructor(private http: HttpClient) { }

  loadCsrfToken(){
    this.http.get(this.BASE_URL + '/api-auth/login', {responseType: 'text'})
          .subscribe((response) => {
        var response_document= document.createElement( 'html' );
        response_document.innerHTML = response
        var csrf_selector = response_document.querySelector('[name=csrfmiddlewaretoken]')
        if (csrf_selector) {
          // @ts-ignore
          localStorage.setItem(this.token_header, csrf_selector.value)
        }
      });
  }
  getHeader(): string{
    return this.token_header;
  }
  getToken(): string{
    let csrf_token = localStorage.getItem(this.getHeader())
    if(csrf_token){
      return csrf_token
    }
    else {
      this.loadCsrfToken();
      return <string>csrf_token;
    }
  }
}
