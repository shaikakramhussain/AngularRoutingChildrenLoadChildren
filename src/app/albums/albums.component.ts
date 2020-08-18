import { Component, OnInit } from '@angular/core';
import {ServiceApiService} from '../service-api.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  fetchData2:any;
  constructor(private service2:ServiceApiService) { }

  ngOnInit(): void {
    this.albumsData();
  }
  albumsData(){
    this.service2.getApi2().subscribe(res2=>{
      console.log(res2);
      this.fetchData2 = res2;
    })
  }

}
