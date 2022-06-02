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
  caterogy!:string
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.postList()

    this.test2()
  }


  getColor(){
  //   this.apiService.getPost().subscribe(
  //     (response:any)=>{
  //  this.posts=response
  //       console.log(response);
  //   if(response.category ==="Business"){
  //         return "green";
  //     } else if(response==="Sport"){
  //       return "red";
  //     }
  //     return
  //     }

  //   )


    }

  postList(){
    this.apiService.find$(`list`).subscribe({
      next:(res)=>{
        this.posts=res
        console.log("res ==> ", res)
      },
      error:(error)=>{
        console.log(error);

      }
    })



  }
test2(){
  this.apiService.test()
  console.log("rufijk");

}

}
