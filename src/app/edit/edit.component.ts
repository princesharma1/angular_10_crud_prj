import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FileserviceService} from '../fileservice.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:string;
h:any;
  apiURL="http://localhost:1000/api/v1/files/";
  flag:boolean=false;
  //uploadForm:FormGroup
  constructor(private service: FileserviceService,private route: ActivatedRoute,private formBuilder: FormBuilder, private httpClient: HttpClient){ }
  uploadForm = new FormGroup({
    fname: new FormControl(''),
    fpname: new FormControl(''),
    fpdesc: new FormControl('')
  }
    )
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.loadData();
   // this.uploadForm.setValue(this.uploadForm.value);
    //this.uploadForm.controls["fname"].setValue('');
    //this.uploadForm.controls["fpname"].setValue('');
  }

  
  loadData(){
  let resp = this.service.getdataById(this.id);
  resp.subscribe(data=>{
    this.h=data;
    console.log(this.h)
  })
}

 onSubmit(){
  //this.form.setValue(this.form.value);
  console.log(this.uploadForm.value);
  

  this.httpClient.post<any>(this.apiURL+this.id, this.uploadForm.value, {observe: 'response'}).subscribe( 
    response=>{
    console.log("Response: " + response.status);
    if(response.status==201){
      this.flag=true;
    }else{
      
    }
    },
    error=>{
      console.log("Error " + error);
      this.flag=false;
      }
  );
  
 }
}
