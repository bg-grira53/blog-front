import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "" , redirectTo: 'postsList', pathMatch: 'full'},
  {path : "postsList" , component : PostsListComponent},
  {path : "post" , component : PostComponent},
  {path : "postDetails/:id" , component : PostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
