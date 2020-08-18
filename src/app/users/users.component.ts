import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from '../service-api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  fetchData3:any;
  constructor(private service3:ServiceApiService) { }
  ngOnInit(){
    this.usersData();
  }
  usersData(){
    this.service3.getApi3().subscribe(res3=>{
      console.log(res3);
      this.fetchData3 = res3;
    })
  }
}
