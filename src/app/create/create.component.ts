import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';
//import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  apiURL="http://localhost:1000/api/v1/files/create";
  flag:boolean=false;
  //uploadForm:FormGroup
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient){ }
  uploadForm = new FormGroup({
    fname: new FormControl(''),
    fpname: new FormControl(''),
    fpdesc: new FormControl('')
  }
    )
  ngOnInit(): void {
  }
  /*form = new FormGroup({
    fname: new FormControl('fname'),
    fpname: new FormControl('fpname'),
    fpdesc: new FormControl('fpdesc')
  });*/

 onSubmit(){
  //this.form.setValue(this.form.value);
  console.log(this.uploadForm.value);
  /*
  const formData = new FormData();
  formData.append('fname', this.uploadForm.get('fname').value);
  formData.append('fpname', this.uploadForm.get('fpname').value);
  formData.append('fpdesc', this.uploadForm.get('fpdesc').value);
  console.log("Form: " + formData);
*/
  /*this.httpClient.post<any>(this.apiURL, this.uploadForm.value).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
    
  );*/

  this.httpClient.post<any>(this.apiURL, this.uploadForm.value, {observe: 'response'}).subscribe( 
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
