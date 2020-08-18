import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  
  url:string = 'https://jsonplaceholder.typicode.com/posts';
  url1:string = 'https://jsonplaceholder.typicode.com/comments';
  url2:string = 'https://jsonplaceholder.typicode.com/albums';
  url3:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
  getApi(){
    return this.http.get(this.url);
  }
  getApi1(){
    return this.http.get(this.url1);
  }
  getApi2(){
    return this.http.get(this.url2);
  }
  getApi3(){
    return this.http.get(this.url3);
  }
}
