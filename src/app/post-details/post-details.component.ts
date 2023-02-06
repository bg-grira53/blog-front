import { Post } from './../Post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post : Post = {
    id: "",
    title: "",
    content: "",
    author: "",
    upvotes: 0,
    downvotes: 0
   
}


  constructor(private service : PostService , private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this.service.getById(id).subscribe((data : Post) => {
        console.log(data)
        this.post = data
      })
  });


 

  

  }


}
