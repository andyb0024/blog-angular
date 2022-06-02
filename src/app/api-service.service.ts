import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Post } from './postdetail/post';
import { subscribeOn, Subscriber } from 'rxjs';
import { PostRepository } from './repository/post.repository';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService extends PostRepository<any> {
  a:string="hfhf"
  constructor(
    protected override _http: HttpClient,
    protected override _router: Router,
  ) {
    super(_http, `${environment.baseUrl}post`, _router)
   }

  // getPost(){
  //   const url=`${environment.baseUrl}` + 'post/';
  //   return this.httpClient.get(url)
  // }


  // getPost(): Observable<Post[]> {
  //   const url=`${environment.baseUrl}post/`;
  //   return this.httpClient.get<Post[]>(url)
  //   .pipe( )
  // }



  test(){
  const observable =new Observable((x)=>{
    x.next(15)
  })
   const observer={
     next:(value:any)=>{
       console.log(value);

     }
   }
   observable.subscribe(observer)

  }
  // findPostById(id:number): Observable<Post> {
  //   const url=`${environment.baseUrl}` + 'post/' + id;
  //     console.log(id)
  //   return this.httpClient.get<Post>(url)
  //   .pipe()

  // }

}


