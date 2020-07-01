import { Component, OnInit } from '@angular/core';
import {FileserviceService} from '../fileservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
hdata:any;
id:string;
  constructor(private service: FileserviceService) { }

  ngOnInit(): void {
   
    this.getsdata();
   
  }

getsdata(){
  let resp = this.service.getdata();
  resp.subscribe(data=>{
    this.hdata=data;
  })
}

}
