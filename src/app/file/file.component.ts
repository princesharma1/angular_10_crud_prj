import { Component, OnInit } from '@angular/core';
import {FileserviceService} from '../fileservice.service'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  h:any;
  id:string;
  constructor(private service: FileserviceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getsdata();
  }

  
getsdata(){
  let resp = this.service.getdataById(this.id);
  resp.subscribe(data=>{
    this.h=data;
  })
}
}
