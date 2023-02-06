import { PostService } from './../services/post.service';
import { Post } from './../Post';
import { Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  list : Post[] = []
  searchValue : string = ""

  constructor(private service : PostService){

  }


  ngOnInit() {

    this.service.List().subscribe((data) => {
  
      this.list = data
    })

  }

  handleVote(id : string , vote : string) {
     
    this.service.handleVote(id , vote).subscribe((data) => {
  
      let index = this.list.findIndex(e => e.id === id)

      if(vote == "upvote") {

        this.list[index].upvotes += 1 ;
      }else {
        this.list[index].downvotes += 1 ;
      }

    })
  }

  search() {
    this.service.search(this.searchValue).subscribe((data) => {
  
      this.list = data
    })
  }
}
