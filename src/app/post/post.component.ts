import { Post } from './../postdetail/post';
import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts:Post[]=[];
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.postList()
  }


  postList(){
    this.apiService.getPost().subscribe(
      (response:any)=>{
        this.posts=response
        console.log(response);

      }

    )

  }

  
}
