import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { PostService } from '../post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  showPost: any;
  constructor(private postService:PostService) { }

  ngOnInit() {
  	this.getPosts();
  	interval(10000).subscribe((counter) => {
  	 	this.getPosts();
    });
  }

  getPosts(){
   this.postService.getPosts()
   	.subscribe((result: any)=>{
   	  result.hits.forEach(post=>this.posts.push(post))
   	})
  }
}
