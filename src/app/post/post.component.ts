import { PostService } from './../services/post.service';
import { Component , OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup , FormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  myForm: FormGroup;

  constructor(private fb: FormBuilder , private service : PostService , private router: Router) {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }


  submit() {

    if(this.myForm.valid) {
      
       this.service.add(this.myForm.value).subscribe(data => {
        this.router.navigate(['/'])
       })

    }

  }
}
