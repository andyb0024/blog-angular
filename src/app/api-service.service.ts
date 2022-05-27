import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Post } from './postdetail/post';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

  // getPost(){
  //   const url=`${environment.baseUrl}` + 'post/';
  //   return this.httpClient.get(url)
  // }

  
  getPost(): Observable<Post[]> {
    const url=`${environment.baseUrl}post/`;
    return this.httpClient.get<Post[]>(url)
    .pipe( )
  }


  findPostById(id:number): Observable<Post> {
    const url=`${environment.baseUrl}` + 'post/' + id;
      console.log(id)
    return this.httpClient.get<Post>(url)
    .pipe()

  }

}


