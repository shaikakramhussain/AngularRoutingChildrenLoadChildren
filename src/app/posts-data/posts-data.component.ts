import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-posts-data',
  templateUrl: './posts-data.component.html',
  styleUrls: ['./posts-data.component.css']
})
export class PostsDataComponent implements OnInit {

  pData:boolean = false;
  fetchData:any;
 
  constructor(private service:ServiceApiService){}
  ngOnInit(){
    this.getDetails();
  }
  getDetails(){
    this.service.getApi().subscribe(res=>{
      console.log(res);
      this.fetchData = res;
    })
  }
  postData(){
    this.pData = true;
  }
}
