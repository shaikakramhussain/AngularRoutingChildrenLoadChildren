import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from '../service-api.service';
@Component({
  selector: 'app-comment-data',
  templateUrl: './comment-data.component.html',
  styleUrls: ['./comment-data.component.css']
})
export class CommentDataComponent implements OnInit {
  cData:boolean = false;
  fetchData1:any;
  constructor(private service:ServiceApiService) { }

  ngOnInit(): void {
    this.commentDataDetails();
  }
  commentDataDetails(){
    this.service.getApi1().subscribe(res1=>{
      console.log(res1);
      this.fetchData1 = res1;
    })
  }
  commentData(){
    this.cData= true;
  }

}
