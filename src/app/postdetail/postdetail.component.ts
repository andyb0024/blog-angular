import { ApiServiceService } from './../api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
 posts:Post |any;


  constructor(private route: ActivatedRoute, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.postDetail()
  }
 postDetail():void{

    //  const slug = this.route.snapshot.params['slug'];
    //  this.service.findPostById(slug).subscribe((response:any)=>{
    //    this.posts=response
    //   console.log(response)
    //    })
   }
}
